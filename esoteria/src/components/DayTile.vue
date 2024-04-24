<script setup>
import MoonPhases from '../data/moonPhases.json';
import { state } from '../state.js';
defineProps({
  header: {
    type: String,
  },
  phase: {
    type: String,
  },
  code: {
    type: String,
  },
  date: {
    type: String,
  }
})
</script>

<template>
  <div class="dayTileWrapper">
    <span class="dayTileHeader">{{ header }}</span>
    <span class="dayTileMoonPhase" :title="phase" v-html="getUnicode(code)"></span>
    <span class="dayTileDate">{{ date }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted() {
      // this.GetMoonPhase();
    },
    computed: {
        phaseData() {
            return state.currentPhase !== null ? this.GetPhaseData() : null
        }
    },
    methods: {
      getUnicode(code) {
      return '&#x' + code + ';';
    },
    }
  }
</script>
<style>
.dayTileWrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid antiquewhite;
  border-radius: 15px;
  background: rgba(250, 235, 215, 0.3);
  box-shadow: -1px 1px 2px 2px antiquewhite;
  height: 160px;
  width: 12%;
  padding: 1%;
  margin: 3% auto;
}
#todayTile {
  height: 200px;
  width: 15%;
}
.dayTileHeader {
  align-self: flex-start;
  font-size:1.5em;
  color: #5a4252;
  font-family: "Lemonada", cursive;
  font-optical-sizing: auto;
  font-style: normal;
}
.dayTileMoonPhase {
  align-self:center;
  font-size: 3em;
}
#todayTile .dayTileMoonPhase {
  font-size: 5em;
}
.dayTileDate {
  align-self: flex-end;
  white-space: nowrap;
  color: white;
  font-family: "Lemonada", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  margin-left:-15px;
}


</style>
