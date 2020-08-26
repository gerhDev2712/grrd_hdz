import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/webdevelopment',
    name: 'WebDevelopment',
    component: () => import('@/views/WebDevelopment.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photography.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
