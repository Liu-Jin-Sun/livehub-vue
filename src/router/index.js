import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
