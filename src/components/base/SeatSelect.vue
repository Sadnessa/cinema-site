<template>
  <div class="seat-select">
    <button
      class="seat"
      v-for="i in seatsCount"
      @click="onSeatClick"
      :disabled="bookedSeats?.includes(i)"
    >
      {{ i }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  seatsCount: Number,
  bookedSeats: Array as PropType<number[]>,
});

const onSeatClick = () => {};
</script>

<style lang="scss" scoped>
.seat-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: var(--white);
  border-radius: 6px;
  padding: 20px;

  .seat {
    background-color: var(--primary);
    padding: 20px;
    width: 80px;
    border: solid 2px var(--primary);  
    text-align: center;

    &:disabled {
      background-color: var(--light);
      border: solid 2px var(--light);  
      cursor: not-allowed;
    }
  }
}
</style>
