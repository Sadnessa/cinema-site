import { defineStore } from 'pinia';
import { ref } from 'vue';
import { filmList } from '../api'

export const useCards = defineStore('cards', () => {
  const cards = ref<[]>([]);

  const loadCards = () => {
    filmList().then((value: any) => {
      cards.value = value
    })
  }

  return {
    cards,
    loadCards
  }
})