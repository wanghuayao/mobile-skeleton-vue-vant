import type { RouteRecordRaw } from 'vue-router'

export const Home: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: () => import('./views/HomeView.vue')
  }
]
