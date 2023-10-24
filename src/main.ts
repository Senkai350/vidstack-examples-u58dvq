import { createApp } from 'vue';


import {router} from "./router/router.ts";
import MainPage from "./MainPage.vue";

const app = createApp(MainPage);
app.use(router)
app.mount('#player');