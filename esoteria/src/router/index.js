import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calendar from '../views/Calendar.vue'
import Tarot from '../views/Tarot.vue'
import BuyDeck from '../views/BuyDeck.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { // Home Page / Daily Pull
      path: '/',
      name: 'home',
      component: HomeView
    },
    { // Tarot Pull
      path: '/tarot',
      name: 'tarot',
      component: Tarot
    },
    { // Moon Phase Calendar
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    { // Moon Phase Calendar
      path: '/buyadeck',
      name: 'buyadeck',
      component: BuyDeck
    }
  ]
})

export default router
