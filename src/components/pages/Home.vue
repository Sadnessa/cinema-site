<template>
  <section class="home">
    <div class="container">
      <FilmCardVue v-for="(card, i) in cardsStore.cards" :card="card" :key="i"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import FilmCardVue from "../base/FilmCard.vue";
import { useCards } from "../../store/store";

const cardsStore = useCards();

cardsStore.loadCards();
</script>
