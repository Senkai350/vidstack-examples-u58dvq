import { createApp } from 'vue';

import MainPage from './MainPage.vue';
import { router } from './router/router'
const app = createApp(MainPage);
app.mount('#player');
