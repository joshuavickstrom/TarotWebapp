<script setup>
import MoonPhases from '../data/moonPhases.json';
import { state } from '../state.js';
</script>

<template>
  <div class="moon" :title="`${state.currentPhase}: ${phaseData ? phaseData.title : state.currentPhase} `">{{ phaseData !== null ? phaseData.icon : 'd'}}</div>
</template>
<script>
  export default {
    data() {
      return {
        allPhases: MoonPhases.moonPhases,
      }
    },
    computed: {
        phaseData() {
            return state.currentPhase !== null ? this.GetPhaseData() : null
        }
    },
    methods: {
      GetPhaseData() {
        return this.allPhases.find(x => x.phaseName.includes(state.currentPhase));
      }
    }
  }
</script>
