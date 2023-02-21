<template>
  <div class="card">
    <div class="card__img">
      <img :src="card.img" />
    </div>
    <div class="card__content">
      <h1 class="card__title">{{ card.title }}</h1>
      <p class="card__price"> {{ card.price }}</p>
      <div class="card__actions">
        <MyButton flat>Подробнее</MyButton>
        <RouterLink to="/seat-booking/">
          <MyButton>Купить билет</MyButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./MyButton.vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 30%;
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

  &__title {
    margin: 0;
    margin-bottom: 14px;
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
