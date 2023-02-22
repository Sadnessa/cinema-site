<template>
  <section class="seat-booking">
    <div class="container">
      <div class="header">
        <RouterLink to="/">
          <MyButton>Назад</MyButton>
        </RouterLink>
        <h1>{{card.title}}</h1>
      </div>
      <SeatSelect
        :seatsCount="card.seats.count"
        :bookedSeats="card.seats.booked"
        v-model:selectedSeats="selectedSeats"
      />
      <div class="column">
        <p>
          К оплате:
          {{ `${card.price} x ${selectedSeats.length} = ${card.price * selectedSeats.length}` }}
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
import { useRoute } from 'vue-router'

const cardStore = useCards();
const card = cardStore.cards[Number(useRoute().query.film)-1];

const selectedSeats = ref<number[]>([]);

const onBookClick = () => {
  card.seats.booked = card.seats.booked.concat(selectedSeats.value);
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
