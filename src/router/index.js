import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceso from '../views/Acceso.vue'
import Principal from '../views/MenuPrincipal.vue'
import Usuarios from '../views/Usuarios.vue'
import Lineamientos from '../views/Lineamientos.vue'

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
    component: Principal,
    children: [
      {
        path: 'lineamientos',
        name: 'Lineamientos',
        component: Lineamientos
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: Usuarios
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
