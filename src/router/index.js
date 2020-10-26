import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceso from '../views/Acceso.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acceso',
    component: Acceso
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
