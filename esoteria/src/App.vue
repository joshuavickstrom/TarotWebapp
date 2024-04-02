<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MoonIcon from './components/MoonIcon.vue';
import OpenAI from "openai";
import axios from "axios";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <MoonIcon :phase="moonPhase" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
