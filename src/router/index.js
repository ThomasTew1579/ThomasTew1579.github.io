import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RealisationsView from '../views/RealisationsView.vue'
import ExpreienceView from '../views/ExpreienceView.vue'
import FormationsView from '../views/FormationsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/realisations',
      name: 'realisations',
      component: RealisationsView
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExpreienceView
    },
    {
      path: '/formations',
      name: 'formations',
      component: FormationsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
