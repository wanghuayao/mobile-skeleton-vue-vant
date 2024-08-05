<script setup lang="ts">
import { AuthApi } from '@/api/auth'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

defineOptions({
  name: 'LoginView'
})

// store
const userStore = useUserStore()

// ref
const username = ref('')
const password = ref('')
const pin = ref('')

// method
const onSubmit = async (values: { username: string; password: string }) => {
  const result = await AuthApi.login({ ...values })

  userStore.updateUser({ username: result.username, name: result.name })

  router.push({ name: 'Home', replace: true })
}
</script>

<template>
  <h1 class="text-center text-3xl font-bold py-10">
    <van-icon name="diamond-o" />
    <van-icon name="point-gift" />
  </h1>

  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="username"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    >
      <template #left-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </template>
    </van-field>
    <van-field
      v-model="password"
      type="password"
      name="password"
      placeholder="密码"
      :rules="[{ required: true }]"
    >
      <template #left-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
          />
        </svg>
      </template>
    </van-field>

    <van-field
      v-model="pin"
      type="input"
      name="pin"
      placeholder="验证码"
      :rules="[{ required: true, message: '' }]"
      class="py-0"
    >
      <template #left-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
          />
        </svg>
      </template>
      <template #right-icon>
        <van-button type="default" size="small">获取验证密码</van-button>
      </template>
    </van-field>

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit" class=""> 提交 </van-button>
    </div>
  </van-form>
</template>

<style>
.my-icon-extra::before {
  content: '';
}
</style>
