<template>
  <section class="seat-booking">
    <div class="container">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ card.title }}</h1>
      </div>
      <SeatSelect
        :seatsCount="card.seats.count"
        :bookedSeats="card.seats.booked"
        v-model:selectedSeats="selectedSeats"
      />
      <div class="column">
        <p>
          К оплате:
          {{
            `${card.price} x ${selectedSeats.length} = ${
              card.price * selectedSeats.length
            }`
          }}
        </p>
        <MyButton class="button" @click="onBookClick" :disabled="selectedSeats.length == 0">Забронировать</MyButton>
      </div>
      <MyModal v-model:openModal="doShowModal" @submitClick="submitClick">
        <template #header>
          Забронировать?
        </template>
        <p>Выбранные места: {{ selectedSeats.join(", ") }}</p>
        <p>Количество билетов: {{ selectedSeats.length }}</p>
        <p>К оплате: {{ card.price * selectedSeats.length }} </p>
      </MyModal>
    </div>
  </section>
</template>

<script setup lang="ts">
import SeatSelect from "../base/SeatSelect.vue";
import MyButton from "../base/MyButton.vue";
import MyModal from "../base/MyModal.vue";
import { computed, ref } from "vue";
import { useCards } from "../../store/store";
import { useRoute } from "vue-router";

const cardStore = useCards();
const route = useRoute();
const card = computed(() => cardStore.cards[Number(route.query.film) - 1]);

const selectedSeats = ref<number[]>([]);
const doShowModal = ref<boolean>(false);

const onBookClick = () => {
  doShowModal.value = !doShowModal.value;
};

const submitClick = () => {
  card.value.seats.booked = card.value.seats.booked.concat(selectedSeats.value);
  selectedSeats.value = [];
  doShowModal.value = !doShowModal.value;
}
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
