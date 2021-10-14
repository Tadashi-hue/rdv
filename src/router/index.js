import { createRouter, createWebHistory } from 'vue-router'
import routes from '../client/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
