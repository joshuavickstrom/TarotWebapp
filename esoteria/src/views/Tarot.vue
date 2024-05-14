<script setup>
import arcana from '../data/arcana.json';
import card from '../components/Card.vue';
import { state } from '../state.js';
</script>
<template>
  <div class="tarot" style="flex-direction: column;">
    <div>
      <h1>3 Card Spread</h1>
    </div>
    <div class="row">
      <card class="col-4" v-for="card in cards" :deck="decks[state.chosenDeck].folder" :front="card.images[decks[state.chosenDeck].folder]"></card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cards: [],
        spreadChoices: [
          {
            id: 1,
            name: "3 Card Spread",
            cards: 3
          }
        ],
        decks: [
          {
            id: 1,
            name: "Rider Waite",
            folder: "Rider-Waite"
          }
        ]
      }
    },
    mounted() {
      this.RunSpread(state.chosenSpread);
    },
    methods: {
      ChooseCard() {
        return arcana.arcana[Math.floor(Math.random() * 64)];
      },
      RunSpread(index) {
        this.cards.length = 0; // Reset pulled cards
        for (let i = 0; i < this.spreadChoices[index].cards; i++) {
          this.cards.push(this.ChooseCard());
        }
      }
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .tarot {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
