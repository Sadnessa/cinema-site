import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/variables.scss'
import router from './router'
import App from './App.vue'

createApp(App).use(router).use(createPinia).mount('#app')
