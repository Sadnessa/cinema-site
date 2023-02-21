import { defineStore } from "pinia";
import { ref } from "vue";
import { filmList, type Film } from "../api";

export const useCards = defineStore("cards", () => {
  const cards = ref<Film[]>([]);

  const loadCards = () => {
    filmList().then((value) => {
      cards.value = value;
    });
  };

  return {
    cards,
    loadCards,
  };
});
