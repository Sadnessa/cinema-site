<template>
  <section class="seat-booking">
    <div class="container" v-if="film">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ film.title }}</h1>
      </div>
      <SeatSelect
        :bookedSeats="film.seats.booked"
        :row="film.seats.seatsInRow"
        v-model:selectedSeats="selectedSeats"
      />
      <div class="column">
        <p>
          К оплате:
          {{
            `${film.price} x ${selectedSeats.length} = ${
              film.price * selectedSeats.length
            }`
          }}
        </p>
        <MyButton
          class="button"
          @click="onBookClick"
          :disabled="selectedSeats.length == 0"
        >
          Забронировать
        </MyButton>
      </div>
      <MyModal v-model:openModal="doShowModal" @submitClick="submitClick">
        <template #header> Забронировать? </template>
        <p>Выбранные места:</p>
        <div class="selected-seats">
          <div class="seat" v-for="i in renderSelectedSeats()">
            {{ i }}
          </div>
        </div>
        <p>Количество билетов: {{ selectedSeats.length }}</p>
        <p>К оплате: {{ film.price * selectedSeats.length }}</p>
      </MyModal>
    </div>
  </section>
</template>

<script setup lang="ts">
import SeatSelect from "../base/SeatSelect.vue";
import MyButton from "../base/MyButton.vue";
import MyModal from "../base/MyModal.vue";
import { ref } from "vue";
import { useFilms } from "../../store/store";
import { useRoute } from "vue-router";
import { Film } from "../../api";

const { loadFilm } = useFilms();
const route = useRoute();

const selectedSeats = ref<{ row: number; seat: number }[]>([]);
const doShowModal = ref<boolean>(false);

const film = ref<Film>();
loadFilm(Number(route.query.film)).then((value) => (film.value = value));

const onBookClick = () => {
  doShowModal.value = !doShowModal.value;
};

const submitClick = () => {
  film.value!.seats.booked = film.value!.seats.booked.concat(
    selectedSeats.value
  );
  selectedSeats.value = [];
  doShowModal.value = !doShowModal.value;
};

const renderSelectedSeats = () => {
  const render = selectedSeats.value.map((el) => {
    return `ряд: ${el.row}, место: ${el.seat}`;
  });
  return render;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
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

.selected-seats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  overflow-y: auto;
  max-height: 100px;
}

.seat {
  background-color: var(--light);
  width: fit-content;
  padding: 10px;
  border-radius: 6px;
}
</style>
