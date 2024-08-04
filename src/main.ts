import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Button, CellGroup, Field, Form } from 'vant'

const vantComponents = [Form, Field, CellGroup, Button]

const app = createApp(App)

app.use(createPinia())
app.use(router)

vantComponents.forEach((item) => app.use(item))

app.mount('#app')
