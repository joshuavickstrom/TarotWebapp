<script setup>
    import arcana from '../data/arcana.json';
    import { state } from '../state.js';
    const props = defineProps(['front', 'deck'])
</script>
<template>
  <div>
    <img style="height: 40px;" :src="`src/assets/decks/${deck}/${front}`" />
    <img style="height: 40px;" src="../assets/decks/Rider-Waite/Back.jpg" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        spreadChoices: [
          {
            id: 1,
            name: "3 Card Spread",
            cards: 3
          }
        ]
      }
    },
    mounted() {
        console.log(this.front);
    },
    methods: {
      ChooseCard() {

      },
      RunSpread(index) {

      }
    }
  }
</script>
