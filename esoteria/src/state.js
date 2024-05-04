import { reactive } from 'vue'

export const state = reactive({
  currentPhase: null,
  chosenSpread: 0, // Index of spread in the SpreadChoices array in Tarot.vue
  chosenDeck: 0, // Index of deck in the decks array in Tarot.vue
})