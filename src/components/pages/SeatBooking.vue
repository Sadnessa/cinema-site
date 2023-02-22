<template>
  <section class="seat-booking">
    <div class="container">
      <div class="header">
        <RouterLink to="/">
          <MyButton>Назад</MyButton>
        </RouterLink>
        <h1>Film title</h1>
      </div>
      <SeatSelect
        :seatsCount="40"
        :bookedSeats="bookedSeats"
        v-model:selectedSeats="selectedSeats"
      />
      <div class="column">
        <p>
          К оплате:
          {{ `250 x ${selectedSeats.length} = ${250 * selectedSeats.length}` }}
        </p>
        <MyButton class="button" @click="onBookClick">Забронировать</MyButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SeatSelect from "../base/SeatSelect.vue";
import MyButton from "../base/MyButton.vue";
import { ref } from "vue";
import { useCards } from "../../store/store";

const selectedSeats = ref<number[]>([]);
const bookedSeats = ref<number[]>([30, 4, 6]);

const onBookClick = () => {
  bookedSeats.value = bookedSeats.value.concat(selectedSeats.value);
  selectedSeats.value = [];
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  h1 {
    margin: 0;
  }
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin: 0;
    margin-top: 20px;
  }

  .button {
    margin-top: 20px;
  }
}
</style>
