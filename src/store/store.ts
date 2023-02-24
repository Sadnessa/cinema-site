import { defineStore } from "pinia";
import { ref } from "vue";
import { filmList, type Film } from "../api";

export const useFilms = defineStore("films", () => {
  const allFilms = ref<Film[]>([]);

  const loadAllFilms = () => {
    filmList().then((value) => {
      allFilms.value = value;
    });
  };

  const loadFilm = (film: number) => {
    return filmList().then((value) => {
      return value.find((el) => {
        return el.id === film;
      });
    });
  };  

  return {
    allFilms,
    loadAllFilms,
    loadFilm,
  };
});
