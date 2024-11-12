<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <h1>{{ portfolioStore.name }}</h1>
    <p>{{ portfolioStore.description }}</p>
  </header>
</template>

<script>
import { usePortfolioStore } from '../stores/usePortfolioStore'

export default {
  name: 'Header',
  setup() {
    const portfolioStore = usePortfolioStore() // Access the store

    return { portfolioStore }
  }
}
</script>

<style scoped>
/* Scoped styles for this component */
.header {
  background-color: #4CAF50; /* Green background */
  color: white; /* White text */
  padding: 20px; /* Padding around the content */
  text-align: center; /* Center the text */
}

.header h1 {
  font-size: 2.5em; /* Make the title larger */
  margin-bottom: 10px; /* Add space below the title */
}

.header p {
  font-size: 1.2em; /* Slightly larger text for description */
  font-weight: lighter; /* Lighter weight for the description */
}
</style>



