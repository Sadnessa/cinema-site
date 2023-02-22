<template>
  <div class="card">
    <div class="card__img">
      <img :src="card.img" />
    </div>
    <div class="card__content">
      <div class="card__header">
        <h1 class="card__title">{{ card.title }}</h1>
        <span class="card__price">{{ card.price }}</span>
      </div>
      <div class="card__actions">
        <MyButton flat>Подробнее</MyButton>
        <RouterLink :to="{ path: '/seat-booking/', query: { film: card.id }}">
          <MyButton>Купить билет</MyButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./MyButton.vue";
import { type Film } from "../../api"
import { PropType } from "vue";

const props = defineProps({
  card: {
    type: Object as PropType<Film>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--white);
  overflow: hidden;
  border-radius: 6px;

  &__img {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 10px 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  &__title {
    margin: 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 6px;

    * {
      flex-grow: 1;
    }

    a {
      .button {
        width: 100%;
      }
    }
  }
}
</style>
