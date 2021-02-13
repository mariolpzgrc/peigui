import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceso from '../views/Acceso.vue'
import Principal from '../views/MenuPrincipal.vue'
import Usuarios from '../views/Usuarios.vue'
import Lineamientos from '../views/Lineamientos.vue'
import RegistroPEI from '../views/RegistroPEI.vue'
import Bienio from '../views/PEIBienios.vue'
import Evaluacion from '../views/EvaluarPEI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acceso',
    component: Acceso
  },
  {
    path: '/principal',
    name: 'Principal',
    component: Principal,
    children: [
      {
        path: '',
        component: Lineamientos
      },
      {
        path:'registro-pei',
        component: RegistroPEI
      },
      {
        path: 'peis-exitosos',
        component: Bienio
      },
      {
        path: 'evaluacion',
        component: Evaluacion
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
