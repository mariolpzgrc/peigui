import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceso from '../views/Acceso.vue'
import Principal from '../views/MenuPrincipal.vue'
import Usuarios from '../views/Usuarios.vue'
import Lineamientos from '../views/Lineamientos.vue'
import RegistroPEI from '../views/RegistroPEI.vue'
import Bienio from '../views/PEIBienios.vue'
import Evaluacion from '../views/EvaluarPEI.vue'
import EvaluandoPEI from '../views/Evaluacion.vue'
import Invitacion from '../views/InvitacionEvaluacion.vue'
import ActasEvaluacion from '../views/ActasEvaluacion.vue'
import Evaluadores from '../views/AdministrarEvaluadores.vue'

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
        path: 'invitacion',
        component: Invitacion
      },
      {
        path: 'registro-pei',
        component: RegistroPEI
      },
      {
        path: 'peis-exitosos',
        component: Bienio
      },
      {
        path: 'evaluacion',
        name: 'evaluacion',
        component: Evaluacion,
      },
      {
        path: './evaluando-pei',
        name: 'evaluandoPei',
        component: EvaluandoPEI
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
      },
      {
        path: '/actas-de-evaluacion',
        component: ActasEvaluacion
      },
      {
        path: '/administrar-evaluadores',
        component: Evaluadores
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
