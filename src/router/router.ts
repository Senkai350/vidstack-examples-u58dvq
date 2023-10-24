import {createRouter, createWebHashHistory} from 'vue-router'
import Player from "../Player.vue"
import Page from "../Page.vue"
const routes = [
  { path: '/', component: Page, name: 'Page' },
  { path: '/player', component: Player, name: 'Player' },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})
export {router}