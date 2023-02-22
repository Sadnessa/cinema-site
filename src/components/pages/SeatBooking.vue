<template>
  <section class="seat-booking">
    <div class="container">
      <SeatSelect :seatsCount="40" :bookedSeats="[30, 4, 6]"/>
    </div>
  </section>
</template>

<script setup lang="ts">
  import SeatSelect from '../base/SeatSelect.vue';
</script>