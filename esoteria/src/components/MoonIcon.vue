<script setup>
import MoonPhases from '../data/moonPhases.json';
    defineProps(['phase'])
</script>

<template>
  <div class="moon">{{ phaseData !== null ? phaseData.icon : 'd'}}</div>
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
            return this.phase !== null ? this.GetPhaseData() : null
        }
    },
    methods: {
      GetPhaseData() {
        return this.allPhases.find(x => x.phaseName.includes(this.phase));
      }
    }
  }
</script>
