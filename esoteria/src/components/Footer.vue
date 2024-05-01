<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="footer">
    <p id="FooterCopyright">&#169; 2024</p>
    <p><a id="FooterLinkLili" href="https://www.linkedin.com/in/lili-clift/">Lili Clift</a>, <a id="FooterLinkMackenzie" href="https://www.linkedin.com/in/mackenzie-branch/">Mackenzie Branch</a>, <a id="FooterLinkJoshua" href="https://www.linkedin.com/in/joshuakvickstrom/">Joshua Vickstrom</a></p>
    <a id="FooterLinkGithub" class="icon" href="https://github.com/joshuavickstrom/TarotWebapp" target="_blank" rel="noopener"><FontAwesomeIcon :icon="faGithub" /> Visit our project</a> 
  </div>
</template>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #0D0107;
  color: antiquewhite;
  text-align: center;
}
.icon {
  margin-top:-.6rem;
  font-size:1.3em;
}
.footer a, .footer a:hover, .footer a:focus
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
.footer a:hover, .footer a:focus
{
	color: #D19900;
	text-shadow: -1px 1px 8px #ffc, 1px -1px 8px #fff;
}
@media (max-width: 700px) {
  nav {
    text-align: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
.nav-right {

  display:none;
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
