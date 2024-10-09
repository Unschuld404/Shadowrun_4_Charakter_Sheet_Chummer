import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SkillView from '@/views/SkillView.vue'
import WeaponView from '@/views/WeaponView.vue'
import SpellView from '@/views/MagicView.vue'
import VehicleView from '@/views/VehicleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: MainView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillView
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: WeaponView
    },
    {
      path: '/magic',
      name: 'magic',
      component: SpellView
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehicleView
    },
  ]
})

export default router
