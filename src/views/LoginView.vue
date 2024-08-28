<script setup>
import { isAuthenticated } from '../router';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const formData = ref({
  username: '',
  password: ''
})

const User = 'user'
const pwd = 'pwd'
const router = useRouter()

const submitForm = () => {
  if (formData.value.username === User && formData.value.password === pwd) {
    isAuthenticated.value = true
    router.push({name:'About'})
  }else{
    alert('error!!!!')
  }
}
</script>

<template>
  <!-- 🗄️ W3. Library Registration Form -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ W5. Library Login Form</h1>
        <p class="text-center">This is for Login</p>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="formData.username" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="formData.password"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="text-center">
              <button type="submit" class="btn btn-primary me-2">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}
</style>
