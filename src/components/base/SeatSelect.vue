<template>
  <div class="seat-select">
    <button
      class="seat"
      v-for="seatNumber in seatsCount"
      @click="onSeatClick(seatNumber)"
      :disabled="bookedSeats.includes(seatNumber)"
      :class="selectedSeats.includes(seatNumber) ? 'seat--selected' : ''"
    >
      {{ seatNumber }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  seatsCount: Number,

  bookedSeats: {
    type: Array as PropType<number[]>,
    required: true,
  },

  selectedSeats: {
    type: Array as PropType<number[]>,
    required: true,
  },
});

const emits = defineEmits(["update:selectedSeats"]);

const selectedSeats = computed({
  get() {
    return props.selectedSeats;
  },

  set(value) {
    emits("update:selectedSeats", value);
  },
});

const onSeatClick = (selectedSeat: number) => {
  if (selectedSeats.value.includes(selectedSeat)) {
    selectedSeats.value = selectedSeats.value.filter((el) => {
      return el !== selectedSeat;
    });
  } else {
    selectedSeats.value.push(selectedSeat);
  }
};
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
    border-radius: 4px;

    &:disabled {
      background-color: var(--light);
      border: solid 2px var(--light);
      cursor: not-allowed;
    }

    &--selected {
      background-color: red;
    }
  }
}
</style>
