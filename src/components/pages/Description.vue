<template>
  <section class="description">
    <div class="container">
      <img :src="card.img" />
      <div class="content">
        <h1>{{ card.title }}</h1>
        <p> {{ card.description }}</p>
        <RouterLink :to="{ path: '/seat-booking/', query: { film: card.id }}">
          <MyButton>Купить билет</MyButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCards } from "../../store/store";
import { useRoute } from "vue-router";
import MyButton from "../base/MyButton.vue";
import { computed } from "vue";

const cardStore = useCards();
const route = useRoute();
const card = computed(() => cardStore.cards[Number(route.query.film) - 1]);
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    gap: 20px;
  }
</style>
