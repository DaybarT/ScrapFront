import { createRouter, createWebHistory } from 'vue-router'
import Alcampo from '@/views/Alcampo.vue'
import Makro from '@/views/Makro.vue'
import Carrefour from '@/views/Carrefour.vue'
import Eci from '@/views/Eci.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
