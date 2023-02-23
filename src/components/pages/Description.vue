<template>
  <section class="description">
    <div class="container">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ card.title }}</h1>
      </div>
      <div class="content">
        <img :src="card.img" />
        <div class="about">
          <h1>{{ card.title }}</h1>
          <p>{{ card.description }}</p>
          <RouterLink
            :to="{ path: '/seat-booking/', query: { film: card.id } }"
          >
            <MyButton>Купить билет</MyButton>
          </RouterLink>
          <span> {{ card.price }} </span>
        </div>
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
