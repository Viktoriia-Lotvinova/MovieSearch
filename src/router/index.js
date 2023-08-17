import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import FaivoritesView from '../views/FaivoritesView.vue'


const routes = [{
    path: '/',
    component: HomeView
  },
  {
    path: '/movies/:id',
    component: DetailsView
  },
  {
    path: '/faivorites',
    component: FaivoritesView
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
});
export default router;