<template>
  <section class="seat-booking">
    <div class="container">
      <SeatSelect :seatsCount="40" :bookedSeats="[30, 4, 6]" v-model:selectedSeats="selectedSeats"/>
      {{ selectedSeats }}
    </div>
  </section>
</template>

<script setup lang="ts">
  import SeatSelect from '../base/SeatSelect.vue';
  import { ref } from 'vue';

  const selectedSeats = ref<number[]>([])
</script>