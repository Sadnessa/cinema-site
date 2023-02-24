<template>
  <section class="home">
    <div class="container">
      <FilmCard
        class="film-card"
        v-for="(film, i) in cardsStore.allFilms"
        :card="film"
        :key="i"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import FilmCard from "../base/FilmCard.vue";
import { useFilms } from "../../store/store";

const cardsStore = useFilms();

cardsStore.loadAllFilms();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  .film-card {
    width: 30%;
    flex-grow: 1;
  }
}

@include md {
  .film-card {
    width: 40% !important;
  }
}

@include sm {
  .film-card {
    width: 40% !important;
  }
}

@include xs {
  .film-card {
    width: 100% !important;
  }
}
</style>
