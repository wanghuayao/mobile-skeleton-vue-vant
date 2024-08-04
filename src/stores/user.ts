import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/model/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ username: '', name: '' })

  const updateUser = (newUser: User) => {
    user.value = { ...newUser }
  }

  return { user, updateUser }
})
