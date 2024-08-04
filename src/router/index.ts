import { createRouter, createWebHistory } from 'vue-router'
import { Home } from '@/modules/home'
import { Auth } from '@/modules/auth'
import { createRouterGuards } from './routerGuards'

const router = createRouterGuards(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...Home, ...Auth]
  })
)

export default router
