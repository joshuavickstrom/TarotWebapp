<script setup>
import arcana from '../data/arcana.json';
import card from '../components/Card.vue';
import { state } from '../state.js';
</script>
<template>
  <div class="tarot" style="flex-direction: column; padding: 20px; font-family: 'Lemonada', cursive;">
    <div style="display: flex; flex-direction: column;">
      <h1 style="align-self: center; color: #5A4252;">3 Card Spread</h1>
      <p style="text-align: center; font-family: 'Ojuju', cursive;">The 3 card spread is a classic divinatory tool that is great for those beginning their forray into the world of cartomancy. Just like any other spread, the interpretation of a 3 card reading largely depends on the question you've asked. Some popular interpretations for the 3 card spread are past/present/future and mind/body/spirit. For this spread, we prefer the past/present/future framing, but feel free to interpret your spread in whichever way you choose!</p>
    </div>
    <div class="row">
      <div v-for="(card, index) in cards" class="col-4" style="display: flex; flex-direction: column; align-items: center;"> 
        <h6 style="color: #5A4252">{{ this.spreadChoices[0].meanings[index] }}</h6>
        <card :deck="decks[state.chosenDeck].folder" :front="card.images[decks[state.chosenDeck].folder]"></card>
        <h6 class="pt-2" style="color: #5A4252">{{ card.card }}</h6>
        <p style="font-family: 'Ojuju', cursive; text-align: center;">
          {{ card.brief }} {{ card.advice }}
        </p>
      </div>
    </div>
    <button class="btn glow" @click="RunSpread(state.chosenSpread)">Generate New Spread</button>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        numbers: [],
        cards: [],
        spreadChoices: [
          {
            id: 1,
            name: "3 Card Spread",
            cards: 3,
            meanings: ['Past', 'Present', 'Future']
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
        let randomCard = Math.floor(Math.random() * 64).toFixed();
        randomCard = Number(randomCard);
        if (!this.numbers.includes(randomCard)) {
          this.numbers.push(randomCard);
          return arcana.arcana[randomCard];
        } else {
           return this.ChooseCard();
        }
      },
      RunSpread(index) {
        this.numbers.length = 0;
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
