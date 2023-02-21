<template>
  <section class="home">
    <div class="container">
      <FilmCard class="film-card" v-for="(card, i) in cardsStore.cards" :card="card" :key="i"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import FilmCard from "../base/FilmCard.vue";
import { useCards } from "../../store/store";

const cardsStore = useCards();

cardsStore.loadCards();
</script>

<style lang="scss" scoped>
  .container {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .film-card {
      width: 30%;
    }
  }
</style>
