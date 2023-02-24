<template>
  <div class="seat-select">
    <div class="seats-row" v-for="(rowNumber, i) in row" :key="i">
      <p class="row-number">{{ i + 1 }}</p>
      <div class="seats">
        <MyButton
          class="seat"
          v-for="seatNumber in rowNumber"
          :class="selectedClass(i + 1, seatNumber)"
          :disabled="isSeatDisabled(i + 1, seatNumber)"
          @click="onSeatClick(i + 1, seatNumber)"
        >
          {{ seatNumber }}
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./MyButton.vue";
import { computed, PropType } from "vue";
import { type Film } from "../../api";

const props = defineProps({
  bookedSeats: {
    type: Array as PropType<Film["seats"]["booked"]>,
    required: true,
  },

  selectedSeats: {
    type: Array as PropType<{ row: number; seat: number }[]>,
    required: true,
  },

  row: {
    type: Array as PropType<number[]>,
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

const onSeatClick = (row: number, seat: number) => {
  const findEl = selectedSeats.value.findIndex((el) => {
    return el.row == row && el.seat == seat;
  });

  if (findEl !== -1) {
    selectedSeats.value = selectedSeats.value.filter((el) => {
      return !(el.row == row && el.seat == seat);
    });

    return;
  }

  selectedSeats.value.push({ row: row, seat: seat });
};

const selectedClass = (row: number, seat: number) => {
  return selectedSeats.value.find((el) => el.row == row && el.seat == seat)
    ? "seat--selected"
    : "";
};

const isSeatDisabled = (row: number, seat: number) => {
  return props.bookedSeats.some((el) => el.row == row && el.seat == seat);
};
</script>

<style lang="scss" scoped>
.seat-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  background-color: var(--white);
  border-radius: 6px;
  padding: 20px;

  .seats-row {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .seats {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px;
      flex-grow: 1;

      .seat {
        &--selected {
          background-color: var(--accent);
          border: solid 2px var(--dark);
        }
      }
    }
  }
}
</style>
