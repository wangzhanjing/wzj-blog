import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('@/views/Home')
const IndexPage = () => import('@/views/Index')
const SortIndex = () => import('@/views/Sort')
const GuestIndex = () => import('@/views/Guest')
const AboutIndex = () => import('@/views/About')
const IntroductionIndex = () => import('@/views/Introduction')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'IndexPage',
        component: IndexPage
      },
      {
        path: '/sort',
        name: 'SortIndex',
        component: SortIndex
      },
      {
        path: '/guest',
        name: 'GuestIndex',
        component: GuestIndex
      },
      {
        path: '/about',
        name: 'AboutIndex',
        component: AboutIndex
      },
      {
        path: '/introduction',
        name: 'IntroductionIndex',
        component: IntroductionIndex
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
