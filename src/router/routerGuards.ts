import { useUserStore } from '@/stores/user'
import type { Router } from 'vue-router'

export const createRouterGuards = (router: Router) => {
  router.beforeEach((to, _from, next) => {
    const userStore = useUserStore()

    if (to.name !== 'Login' && !userStore.user.username) next({ name: 'Login' })
    else next()
  })

  return router
}
