import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SkillView from '@/views/SkillView.vue'
import WeaponView from '@/views/WeaponView.vue'
import SpellView from '@/views/SpellView.vue'
import SpiritView from '@/views/SpiritView.vue'

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
      path: '/weapon',
      name: 'weapon',
      component: WeaponView
    },
    {
      path: '/spells',
      name: 'spells',
      component: SpellView
    },
    {
      path: '/spirits',
      name: 'spirits',
      component: SpiritView
    },
  ]
})

export default router
