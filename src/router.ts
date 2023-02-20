import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import SeatBooking from "./components/pages/SeatBooking.vue";

const routes = [
  { path: '/', component: Home, }, 
  { path: '/seat-booking/', component: SeatBooking }
]

const router = createRouter({
  history: createWebHistory('/cinema-site/'),
  routes
})

export default router