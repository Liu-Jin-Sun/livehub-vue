import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (to.fullPath !== '/login') {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
