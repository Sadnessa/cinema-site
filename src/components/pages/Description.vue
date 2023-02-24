<template>
  <section class="description">
    <div class="container" v-if="film">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ film.title }}</h1>
      </div>
      <div class="content">
        <img :src="film.img" />
        <div class="about">
          <h1>{{ film.title }}</h1>
          <p>{{ film.description }}</p>
          <RouterLink
            :to="{ path: '/seat-booking/', query: { film: film.id } }"
          >
            <MyButton>Купить билет</MyButton>
          </RouterLink>
          <span> {{ film.price }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFilms } from "../../store/store";
import { useRoute } from "vue-router";
import MyButton from "../base/MyButton.vue";
import { computed, ref } from "vue";
import { Film } from "../../api";

const { loadFilm } = useFilms();
const route = useRoute();

const film = ref<Film>();
loadFilm(Number(route.query.film)).then((value) => film.value = value);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  h1 {
    margin: 0;
  }
}

.content {
  display: flex;
  gap: 20px;
}
</style>
