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

// method
const onSubmit = async (values: { username: string; password: string }) => {
  const result = await AuthApi.login({ ...values })

  userStore.updateUser({ username: result.username, name: result.name })

  router.push({ name: 'Home', replace: true })
}
</script>

<template>
  <h1>login page</h1>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
