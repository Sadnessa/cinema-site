<template>
  <div class="card">
    <div class="card__img">
      <div class="card__img-loader" v-if="isLoadingImage">
      <MyLoader class="loader"/>
      </div>
      <img :src="card.img" @load="onLoadCardImage"/>
    </div>
    <div class="card__content">
      <div class="card__header">
        <h1 class="card__title" :title="card.title">
          {{ card.title }}
        </h1>
        <span class="card__price">{{ card.price + card.currency }}</span>
      </div>
      <div class="card__actions">
        <RouterLink :to="{ path: '/description/', query: { film: card.id } }">
          <MyButton flat>Подробнее</MyButton>
        </RouterLink>
        <RouterLink :to="{ path: '/seat-booking/', query: { film: card.id } }">
          <MyButton>Купить билет </MyButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./MyButton.vue";
import MyLoader from "./MyLoader.vue";
import { type Film } from "../../api";
import { PropType, ref } from "vue";

const props = defineProps({
  card: {
    type: Object as PropType<Film>,
    required: true,
  },
});

const isLoadingImage = ref<boolean>(true);

const onLoadCardImage = () => {
  isLoadingImage.value = !isLoadingImage.value;
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  overflow: hidden;
  border-radius: 6px;

  &__img {
    position: relative;
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__img-loader {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--white);
  }

  &__content {
    padding: 16px 20px;
    flex-grow: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 20px;
  }

  &__title {
    position: relative;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 20px;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      width: 10%;
      height: 100%;
      background-image: linear-gradient(to right, transparent, var(--white));
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;

    a {
      .button {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
