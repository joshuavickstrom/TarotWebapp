<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import MoonIcon from './MoonIcon.vue'

</script>

<template>
  <header>
      <div style="display: flex;">
        <h1 id="NavHeaderTitle" class="nav-header" style="display: flex; justify-content: center; margin-left: 70px;">Esoteria
          <!-- <RouterLink id="NavHeaderMoon" class="glow" style="padding-left:30px; margin-top:-20px; font-size: 30pt;" to="/calendar">      
            <MoonIcon></MoonIcon>
          </RouterLink> -->
          <div id="NavHeaderMoon" class="glow" style="padding-left:30px; margin-top:-20px; font-size: 30pt;">      
            <MoonIcon></MoonIcon>
          </div>
        </h1>
      </div>
      <!-- <h1 class="nav-header" style="margin-right: 30px !important; z-index: 3;">{{ msg }}</h1>
      <RouterLink style="z-index: 3; padding:0px; position: relative; font-size: 30pt;" to="/calendar">      
        <MoonIcon></MoonIcon>
      </RouterLink> -->
      <h3 id="NavHeaderSubtitle" class="nav-subheader">
        Cartomancy Companion
      </h3>  
      <nav>
          <RouterLink id="NavLinkHome" class="glow" to="/">Daily Reflection</RouterLink>
          <RouterLink id="NavLinkTarot" class="glow" to="/tarot">Tarot Pull</RouterLink>
          <!-- <RouterLink id="NavLinkCalendar" class="glow" to="/calendar">Moon Calendar</RouterLink> -->
          <!-- <RouterLink id="NavLinkMobileBuyDeck" class="nav-mobile glow" to="/buyadeck">&#x1F0E9;</RouterLink>
          <RouterLink id="NavLinkBuyDeck" class="nav-right glow" to="/buyadeck"><span class="card-uni">&#x1F0E9;</span> Buy your own deck</RouterLink> -->
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
a.glow, a.glow:hover, a.glow:focus
{
	text-decoration: none;
	color: antiquewhite;
	text-shadow: none;
	-webkit-transition: 500ms linear 0s;
	-moz-transition: 500ms linear 0s;
	-o-transition: 500ms linear 0s;
	transition: 500ms linear 0s;
	outline: 0 none;
}
a.glow:hover, a.glow:focus
{
	color: #fff;
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
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
