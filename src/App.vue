<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

import 'vant/lib/index.css'
import './style.css'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)
</script>

<template>
  <header>Page header: login user:{{ user.name }}</header>
  <RouterView />
</template>
