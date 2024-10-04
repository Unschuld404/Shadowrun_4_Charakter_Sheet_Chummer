import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SkillView from '@/views/SkillView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/',
      name: 'skills',
      component: SkillView
    },
  ]
})

export default router
