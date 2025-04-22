import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView,
    },
    {
      path: '/jogo',
      name: 'jogo',
      component: GameView,
    }
  ],
})

export default router
