<template>
  <section class="description">
    <div class="container" v-if="film">
      <div class="header">
        <MyButton @click="$router.back()">Назад</MyButton>
        <h1>{{ film.title }}</h1>
      </div>
      <div class="content">
        <div class="content__img">
          <div class="content__img-loader" v-if="isLoadingImage">
            <MyLoader/>
          </div>
          <img :src="film.img" @load="onLoadCardImage"/>
        </div>
        <div class="content__about">
          <h1>{{ film.title }}</h1>
          <hr noshade>
          <p>{{ film.description }}</p>
          <div class="actions">
            <span> {{ film.price + film.currency}} </span>
            <RouterLink
              :to="{ path: '/seat-booking/', query: { film: film.id } }"
            >
              <MyButton>Купить билет</MyButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MyButton from "../base/MyButton.vue";
import MyLoader from "../base/MyLoader.vue";
import { useFilms } from "../../store/store";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { Film } from "../../api";

const { loadFilm } = useFilms();
const route = useRoute();

const film = ref<Film>();
loadFilm(Number(route.query.film)).then((value) => (film.value = value));

const isLoadingImage = ref<boolean>(true);

const onLoadCardImage = () => {
  isLoadingImage.value = !isLoadingImage.value;
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.content {
  display: flex;
  gap: 20px;
  flex-grow: 1;
  background-color: var(--white);
  border-radius: 6px;
  max-height: 500px;
  overflow: hidden;

  &__about {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 20px;
    padding-left: 0;

    p {
      overflow-x: scroll;
      line-height: 30px;
      margin-top: 0;
      padding-right: 10px;
      flex-grow: 1;
    }

    hr {
      color: var(--light);
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__img {
    position: relative;
    flex-grow: 1;

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
}

@include sm {
  .content {
    flex-direction: column;
    max-height: 100% !important;

    &__about {
      width: auto !important;
      overflow-x: visible !important;
      padding-left: 20px !important;
      padding-top: 0;

      p {
        padding-right: 0 !important;
      }
    }
  }
}

@include xs {
  .content {
    flex-direction: column;
    max-height: 100% !important;

    &__about {
      width: auto !important;
      overflow-x: visible !important;
      padding-left: 20px !important;
      padding-top: 0;

      p {
        padding-right: 0 !important;
      }
    }
  }
}
</style>
