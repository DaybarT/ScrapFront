import { createRouter, createWebHistory } from 'vue-router'
import Alcampo from '@/views/Alcampo.vue'
import Makro from '@/views/Makro.vue'
import Carrefour from '@/views/Carrefour.vue'
import Eci from '@/views/Eci.vue'
import Home from '@/views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Alcampo',
      name: 'alcampo',
      component: Alcampo
    },{
      path: '/Makro',
      name: 'makro',
      component: Makro
    },{
      path: '/Carrefour',
      name: 'carrefour',
      component: Carrefour
    },{
      path: '/Eci',
      name: 'eci',
      component: Eci
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
