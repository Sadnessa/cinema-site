<template>
  <div class="card">
    <div class="card__img">
      <img :src="img" />
    </div>
    <div class="card__content">
      <h1 class="card__title"> {{ title }} </h1>
      <div class="card__actions">
        <MyButton flat>Подробнее</MyButton>
        <MyButton>Купить билет</MyButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from './MyButton.vue';

const props = defineProps({
  img: {
    type: String,
    default: "https://picsum.photos/400/200",
  },

  title: {
    type: String, 
    default: "Film name"
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

    .button {
      flex-grow: 1;
    }
  }
}
</style>
