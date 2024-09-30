import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookList from '@/components/BookList.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue';

import { ref } from 'vue'

const isAuthenticated = ref(null)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/firebaseLogin',
    name: 'FirebaseLogin',
    component: FirebaseSigninView
  },
  {
    path: '/firebaseRegister',
    name: 'FirebaseRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) next({ name: 'FirebaseLogin' })
      else next()
    }
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { isAuthenticated }
export default router
