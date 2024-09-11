<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../router';


const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('Firebase Register Successful!')
      router.push('/')
      console.log(auth.currentUser)
      isAuthenticated.value = auth.currentUser
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>

<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<style setup></style>
