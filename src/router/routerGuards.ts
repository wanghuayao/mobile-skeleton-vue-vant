import { useUserStore } from '@/stores/user'
import type { Router } from 'vue-router'

export const createRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    console.log('router.beforeEach', to.name, from.name)

    const userStore = useUserStore()

    if (to.name !== 'Login' && !userStore.user.username) next({ name: 'Login' })
    else next()
  })

  return router
}
