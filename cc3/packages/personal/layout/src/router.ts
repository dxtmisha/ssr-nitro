import { createWebHistory, type RouterOptions } from 'vue-router'

import IndexPage from './pages/IndexPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes: RouterOptions['routes'] = [
  {
    name: 'Index',
    component: IndexPage,
    path: '/'
  },
  {
    name: 'About',
    component: AboutPage,
    path: '/about'
  }
]

export const router: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
}
