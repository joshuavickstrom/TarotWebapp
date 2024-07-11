<script setup>
import arcana from '../data/arcana.json';
import MoonPhases from '../data/moonPhases.json';
import card from '../components/Card.vue';
import { state } from '../state.js';
</script>

<template>
  <div style="flex-direction: column; padding: 20px; font-family: 'Lemonada', cursive; font-size: 13pt;">
    <div style="display: flex; flex-direction: column;">
      <h3 style="color: #5A4252;">Today's Card: <span style="font-family: 'Ojuju', cursive; color: antiquewhite">{{ cards.length > 0 ? cards[0].card : '' }}</span></h3>
    </div>
    <div class="row mt-3">
      <div v-for="(card, index) in cards" style="display: flex; flex-direction: row;"> 
        <card :deck="decks[state.chosenDeck].folder" :front="card.images[decks[state.chosenDeck].folder]"></card>
        <div style="display: flex; flex-direction: column; margin-left: 30px;">
          <h6 style="color: #5A4252;">Card Meaning:</h6>
          <p style="font-family: 'Ojuju', cursive;">
            {{ card.brief }} {{ card.advice }}
          </p>
        </div>
      </div>
    </div>   
    
    <div class="mt-4" style="display: flex; flex-direction: column;">
      <h3 style="color: #5A4252;">Today's Moon: <span style="font-family: 'Ojuju', cursive; color: antiquewhite">{{ state.currentPhase }}</span></h3>
      <div style="display: flex; flex-direction: row;">
        <div class="moon" style="font-size: 60pt;  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
">{{ phaseData.icon }}</div>
        <div style="display: flex; flex-direction: column; margin-left: 65px;">
          <h6 style="color: #5A4252;">Influence:</h6>
          <p style="font-family: 'Ojuju', cursive;">
            {{ phaseData.title }} {{ phaseData.influence }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        allPhases: MoonPhases.moonPhases,
        numbers: [],
        cards: [],
        decks: [
          {
            id: 1,
            name: "Rider Waite",
            folder: "Rider-Waite"
          }
        ]
      }
    },
    computed: {
        phaseData() {
            return state.currentPhase !== null ? this.GetPhaseData() : null
        }
    },
    mounted() {
      this.ChooseCard();
    },
    methods: {
      ChooseCard() {
        this.cards.length = 0;
        let randomCard = Math.floor(Math.random() * 64).toFixed();
        randomCard = Number(randomCard);
        this.cards.push(arcana.arcana[randomCard]);
        console.log(arcana.arcana[randomCard])
      },
      GetPhaseData() {
        return this.allPhases.find(x => x.phaseName.includes(state.currentPhase));
      }
    }
  }
</script>
<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
