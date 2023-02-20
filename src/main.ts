import { createApp } from 'vue'
import './assets/variables.scss'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
