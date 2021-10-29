import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../components/MainPage.vue'
import cart from '../components/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
