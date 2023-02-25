import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import SeatBooking from "./components/pages/SeatBooking.vue";
import Description from "./components/pages/Description.vue"

const routes = [
  { path: '/', component: Home, }, 
  { path: '/seat-booking/', component: SeatBooking },
  { path: '/description/', component: Description },
]

const router = createRouter({
  history: createWebHistory('/cinema-site/'),
  routes, 
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router