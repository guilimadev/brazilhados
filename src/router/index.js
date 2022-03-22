import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import USAView from '../views/USAView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/usa',
    name: 'usa',
    component: USAView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
