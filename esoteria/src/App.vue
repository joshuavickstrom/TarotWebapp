<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MoonIcon from './components/MoonIcon.vue';
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import OpenAI from "openai";
import axios from "axios";
import { state } from "./state.js"
</script>

<template>
  <NavBar style="position: fixed; top: 0;" />
  <div ref="background" style="position: fixed; top: 180px; z-index: -3; width: 100%; height: 100%;"></div>    
  <div class="main-content">
    <RouterView />
  </div>

  <Footer />
</template>

<script>
  export default {
    data() {
      return {
        openai: null,
        authString: btoa(`992aba9d-c7d8-41ee-abdd-c8de26cc8e29:${import.meta.env.VITE_ASTRO_AI}`),
        moonPhase: null,
        maxx: 0,
        maxy: 0,
        halfx: 0,
        halfy: 0,
        canvas: null,
        context: null,
        dotCount: 200,
        dots: []
      }
    },
    mounted() {
      // commenting out openAI stuff until we figure out server stuff
      // this.openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });
      // this.main();
      this.GetCurrentMoon();

      // Initialize canvas and context
      this.canvas = document.createElement("canvas");
      this.$refs.background.appendChild(this.canvas);
      this.context = this.canvas.getContext("2d");
      this.resizeCanvas();
      window.addEventListener("resize", this.resizeCanvas);
      
      // Create dots
      for (let i = 0; i < this.dotCount; i++) {
        this.dots.push(this.createDot());
      }
      
      // Start animation
      this.render();
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resizeCanvas);
    },
    methods: {
      async main() {
        const completion = await this.openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0]);
      },
      GetCurrentMoon() {
        let yourDate = new Date();
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - (offset*60*1000));
        const formattedDate = yourDate.toISOString().split('T')[0];
        axios.get(`https://api.astronomyapi.com/api/v2/bodies/positions/moon?latitude=41.85003&longitude=-87.65005&elevation=597&from_date=${formattedDate}&to_date=${formattedDate}&time=15%3A01%3A28`, {
          headers: {
            Authorization: `Basic ${this.authString}`
          },
        }).then((res) => {
          this.moonPhase = res.data.data.table.rows[0].cells[0].extraInfo.phase.string;
          state.currentPhase = this.moonPhase;
        }).catch((err) => console.error(err));
      },
      resizeCanvas() {
        this.maxx = this.$refs.background.clientWidth;
        this.maxy = this.$refs.background.clientHeight;
        this.halfx = this.maxx / 2;
        this.halfy = this.maxy / 2;
        this.canvas.width = this.maxx;
        this.canvas.height = this.maxy;
      },
      createDot() {
        return {
          rad_x: 2 * Math.random() * this.halfx + 1,
          rad_y: 1.2 * Math.random() * this.halfy + 1,
          alpha: Math.random() * 360 + 1,
          speed: Math.random() * 100 < 50 ? .03 : -.03,
          size: Math.random() * 5 + 1,
          color: Math.floor(Math.random() * 256)
        };
      },
      render() {
        this.context.fillStyle = "#0D0107";
        this.context.fillRect(0, 0, this.maxx, this.maxy);
        for (let i = 0; i < this.dotCount; i++) {
          this.drawDot(this.dots[i]);
          this.moveDot(this.dots[i]);
        }
        requestAnimationFrame(this.render);
      },
      drawDot(dot) {
        const dx = this.halfx + dot.rad_x * Math.cos(dot.alpha / 180 * Math.PI);
        const dy = this.halfy + dot.rad_y * Math.sin(dot.alpha / 180 * Math.PI);
        this.context.fillStyle = `rgb(${dot.color}, ${dot.color}, ${dot.color})`;
        this.context.fillRect(dx, dy, dot.size, dot.size);
      },
      moveDot(dot) {
        dot.alpha += dot.speed;
        if (Math.random() * 100 < 50) {
          dot.color += 1;
        } else {
          dot.color -= 1;
        }
      }
    }
  }
</script>