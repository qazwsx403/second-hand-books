import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDetailView from '../views/BookDetailView.vue'
import PublishView from '../views/PublishView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/book/:id', name: 'book-detail', component: BookDetailView },
  { path: '/publish', name: 'publish', component: PublishView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router