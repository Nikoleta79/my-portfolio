// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Home.vue') // Change this to the component you want to display
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/About.vue') // Create and import an About.vue component if needed
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
