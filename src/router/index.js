import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceso from '../views/Acceso.vue'
import Principal from '../views/MenuPrincipal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acceso',
    component: Acceso
  },
  {
    path: 'principal',
    name: 'Principal',
    component: Principal
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
