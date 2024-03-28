<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
      <h1 class="nav-header">{{ msg }}</h1>
      <h3 class="nav-subheader">
        Cartomancy Companion
      </h3>  
      <nav>
          <RouterLink to="/">Daily Reflection</RouterLink>
          <RouterLink to="/tarot">Tarot Pull</RouterLink>
          <RouterLink to="/calendar">Moon Calendar</RouterLink>
          <RouterLink class="nav-mobile" to="/buyadeck">&#x1F0E9;</RouterLink>
          <RouterLink class="nav-right" to="/buyadeck"><span class="card-uni">&#x1F0E9;</span> Buy your own deck</RouterLink>
        </nav>
    </header>
</template>

<style>
header {
  background-color: #0D0107;
  color:antiquewhite;
  width:100%;
  height: 180px;
  display:inline-block;
  text-align:center;
}
.nav-header {
  width:100%;
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  margin: 20px auto 0px auto;
  font-family: "Lemonada", cursive;
  font-optical-sizing: auto;
  font-style: normal;
}

.nav-subheader {
  font-size: 1.6rem;
  color: #D19900;
  margin: -15px auto auto;
  font-family: "Ojuju", sans-serif;
  font-weight: 4400;
  font-style: normal;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
  color:antiquewhite;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-style: normal;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
.card-uni {
  font-size:1.2em;
}
nav a:first-of-type {
  border: 0;
}
.nav-right {
  display:inline;
  float:right;
}
.nav-mobile{
  display:none;
}
@media (max-width: 700px) {
  nav {
    text-align: center;
  }
  nav a {
    margin-top: -60px;
    padding:1rem 6px;
  }
.nav-right {
  display:none;
}
.nav-mobile{
  margin-top:-30px;
  font-size: 1.8rem;
  display:inline-block;
}
}
@media (min-width: 701px) {

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
