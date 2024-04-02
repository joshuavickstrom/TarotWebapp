<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MoonIcon from './components/MoonIcon.vue';
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import OpenAI from "openai";
import axios from "axios";
</script>

<template>
  <NavBar msg="Esoteria" />
  <RouterView />
  <Footer />
</template>

<script>
  export default {
    data() {
      return {
        openai: null,
        authString: btoa(`992aba9d-c7d8-41ee-abdd-c8de26cc8e29:${import.meta.env.VITE_ASTRO_AI}`),
        moonPhase: null,
      }
    },
    mounted() {
      // commenting out openAI stuff until we figure out server stuff
      // this.openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });
      // this.main();
      this.GetCurrentMoon();
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
        }).catch((err) => console.error(err));
      }
    }
  }
</script>
