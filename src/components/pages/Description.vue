<template>
  <section class="description">
    <div class="container" v-if="film">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ film.title }}</h1>
      </div>
      <div class="content">
        <div class="content__img">
          <img :src="film.img" />
        </div>
        <div class="content__about">
          <h1>{{ film.title }}</h1>
          <p>{{ film.description }}</p>
          <div class="actions">
            <RouterLink
              :to="{ path: '/seat-booking/', query: { film: film.id } }"
            >
              <MyButton>Купить билет</MyButton>
            </RouterLink>
            <span> {{ film.price }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFilms } from "../../store/store";
import { useRoute } from "vue-router";
import MyButton from "../base/MyButton.vue";
import { ref } from "vue";
import { Film } from "../../api";

const { loadFilm } = useFilms();
const route = useRoute();

const film = ref<Film>();
loadFilm(Number(route.query.film)).then((value) => (film.value = value));
</script>

<style lang="scss" scoped>
section {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

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
  flex-grow: 1;
  background-color: var(--white);
  border-radius: 6px;
  max-height: 500px;
  overflow: hidden;

  &__about {
    width: 30%;
    padding: 20px;
    padding-left: 0;
    overflow-x: scroll;

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__img {
    flex-grow: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@include sm {
  .content {
    flex-direction: column;
    max-height: 100% !important;
    &__about {
      width: auto !important;
      overflow-x: visible !important;
      padding-left: 20px !important;
    }
  }
}

@include xs {
  .content {
    flex-direction: column;
    max-height: 100% !important;
    &__about {
      width: auto !important;
      overflow-x: visible !important;
      padding-left: 20px !important;
    }
  }
}
</style>
