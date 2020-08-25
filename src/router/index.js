import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/webdevelopment',
    name: 'WebDevelopment',
    component: () => import('@/views/WebDevelopment.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photography.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
