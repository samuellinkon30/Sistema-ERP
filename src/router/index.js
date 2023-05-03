import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Produtos from '../views/Produtos.vue'
import Produto from '../views/ProdutoView.vue'
import Fiscal from '../views/Fiscal.vue'


const routes = [
  {
    path:'/',
    name: 'login',
    component: Login
  },
  {
    path:'/fiscal',
    name: 'fical',
    component: Fiscal
  },
  {
    path:'/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path:'/produto',
    name:'produto',
    component: Produto
  },
  {
    path:'/produtos',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
