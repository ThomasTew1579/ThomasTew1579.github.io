import './assets/main.css'
import '@splidejs/vue-splide/css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)

app.use(router)
app.use( VueSplide );

app.mount('#app')
