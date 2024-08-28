<script setup>
import { isAuthenticated } from '../router';
import { useRouter } from 'vue-router';

const router = useRouter()

const Logout = () =>{
  isAuthenticated.value = false
  router.push({name:'Login'})
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
            <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
          </li>
          <li v-else>
            <button class="nav-link btn btn-link disabled">Login</button>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <button class="nav-link btn btn-link" @click="Logout">Logout</button>
          </li>
        </ul>
      </header>
    </div>
  </template>