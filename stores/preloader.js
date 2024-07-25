import { defineStore } from 'pinia';

export const usePreloaderStore = defineStore('preloader', {
  state: () => ({
    isCompleted: false,
  }),

  actions: {
    complete() {
      this.isCompleted = true;
    },
  },
  
  getters: {

  },
});