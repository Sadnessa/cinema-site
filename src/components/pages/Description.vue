<template>
  <section class="description">
    <div class="container">
      <img :src="card.img" />
      <div class="content">
        <h1>{{ card.title }}</h1>
        <p> {{ card.description }}</p>
        <MyButton>Купить билет</MyButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCards } from "../../store/store";
import { useRoute } from "vue-router";
import MyButton from "../base/MyButton.vue";

const cardStore = useCards();
const card = cardStore.cards[Number(useRoute().query.film) - 1];
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }
</style>
