import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Button, CellGroup, Field, Form, Icon } from 'vant'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  const vantComponents = [Form, Field, CellGroup, Button, Icon]

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  vantComponents.forEach((item) => app.use(item))

  app.mount('#app')
})
