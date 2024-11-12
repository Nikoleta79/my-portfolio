import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' // Import the router

const app = createApp(App)

app.use(createPinia())  // Use Pinia
app.use(router)         // Use the router

app.mount('#app')


