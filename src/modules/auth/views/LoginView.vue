<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'

defineOptions({
  name: 'LoginView'
})

const userStore = useUserStore()

const updateUser = () => {
  userStore.updateUser({ username: 'why', name: 'Why' })

  router.push({ name: 'Home', replace: true })
}
</script>

<template>
  <h1>This is an login page</h1>
  <button @click="updateUser">Login</button>
</template>
