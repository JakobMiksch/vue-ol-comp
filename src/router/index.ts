import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/only-map',
      component: () => import('../views/OnlyMap.vue')
    },
    {
      path: '/only-info',
      component: () => import('../views/OnlyInfo.vue')
    }
  ]
})

export default router
