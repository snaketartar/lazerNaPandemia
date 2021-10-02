import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jogos from '../views/Jogos.vue'

Vue.use(VueRouter)

const routes = [
   {
     path: '/',
     name: 'Home',
     component: Home
   },
   {
    path: '/jogos',
    name: 'Jogos',
    component: Jogos
   },

]

const router = new VueRouter({
  routes
})

export default router
