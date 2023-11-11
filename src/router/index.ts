import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mapA',
      component: () => import('../views/MapA.vue')
    },
    {
      path: '/mapB',
      component: () => import('../views/MapB.vue')
    },
    {
      path: '/mapC',
      component: () => import('../views/MapC.vue')
    }
  ]
})

export default router
