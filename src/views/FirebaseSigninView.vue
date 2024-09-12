<script setup>
import { ref } from 'vue'
import { isAuthenticated } from '../router/index.js'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import db from '@/Firebase/init.js'
import Button from 'primevue/button';

const router = useRouter()

const formData = ref({
    username: '',
    password: '',
})

const submitForm = async () => {
    const userEmail = formData.value.username
    const userPassword = formData.value.password

    try {
        // 用户登录
        const { user } = await signInWithEmailAndPassword(getAuth(), userEmail, userPassword)

        // 获取 Firestore 中的用户角色信息
        const userRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            const userData = userSnap.data()
            isAuthenticated.value = {
                user: user,
                role: userData.role,  // 保存用户角色
            }
            console.log(`Logged in as ${userData.role}`)
            router.push({ name: 'Home' })  // 登录成功后跳转
        } else {
            console.error('No user document found in Firestore')
        }
    } catch (error) {
        alert(error.code)
    }
}
</script>

<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="formData.username" /></p>
  <p><input type="password" placeholder="Password" v-model="formData.password" /></p>
  <p><button @click="submitForm">Sign in via Firebase</button></p>
</template>

<style setup></style>
