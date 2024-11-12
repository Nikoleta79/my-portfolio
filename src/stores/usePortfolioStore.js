// src/stores/usePortfolioStore.js
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // Define your state here (e.g., portfolio data)
    name: 'My Portfolio',
    description: 'This is a description of my portfolio.'
  }),
  actions: {
    // Define your actions here (e.g., methods to change state)
    setName(newName) {
      this.name = newName
    }
  }
})

