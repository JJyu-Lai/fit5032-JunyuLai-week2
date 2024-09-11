import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookList from '@/components/BookList.vue'

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
    component: AddBookView
  },
  {
    path: '/bookList',
    name: 'BookList',
    component: BookList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { isAuthenticated }
export default router
