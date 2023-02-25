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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@include md {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include sm {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include xs {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
