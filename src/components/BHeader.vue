<script setup>
import { isAuthenticated } from '../router/index.js'
import { useRouter } from 'vue-router'
import { signOut, getAuth } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()

const Logout = () => {
  signOut(auth)
    .then(() => {
      console.log(isAuthenticated.value)
      router.push('/firebaseLogin') // 重定向到登录页或其他页面
      isAuthenticated.value = null
      alert('sign out!!!!')
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/firebaseLogin" class="nav-link" active-class="active"
            >FirebaseLogin</router-link
          >
        </li>
        <li v-else>
          <button class="nav-link btn btn-link disabled">Login</button>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <button class="nav-link btn btn-link" @click="Logout">Logout</button>
        </li>
        <!-- <li class="nav-item">
            <router-link to="/firebaseLogin" class="nav-link" active-class="active">FirebaseLogin</router-link>
          </li> -->
        <li class="nav-item">
          <router-link to="/firebaseRegister" class="nav-link" active-class="active"
            >FirebaseRegister</router-link
          >
        </li>
        <li class="nav-item" v-if="isAuthenticated && isAuthenticated.role === 'admin'">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/getBookCount" class="nav-link" active-class="active"
            >Get Book Count</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/AddBookCount" class="nav-link" active-class="active">
            Add Book Count
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">
            Get Weather
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
