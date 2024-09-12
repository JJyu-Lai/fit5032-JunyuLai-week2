<template>
  <h1>Create an Account</h1>
  <p>
    <input type="text" placeholder="Email" v-model="formData.username" />
  </p>
  <p>
    <input type="password" placeholder="Password" v-model="formData.password" />
  </p>
  <p>
    <button @click="submitForm">Save to Firebase</button>
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import db from '@/Firebase/init' // 假设 Firestore 初始化在 init.js 中
import { isAuthenticated } from '../router/index.js'
import Button from 'primevue/button';

const auth = getAuth();
const router = useRouter()

const formData = ref({
    username: '',
    password: '',
})

const submitForm = async () => {
    const userEmail = formData.value.username
    const userPassword = formData.value.password

    try {
        // 创建用户
        const { user } = await createUserWithEmailAndPassword(auth, userEmail, userPassword)

        // 创建 Firestore 文档并保存用户信息，设置默认角色为 "user"
        await setDoc(doc(db, 'users', user.uid), {
            email: userEmail,
            role: 'user',  // 默认角色
        })

        // 设置登录状态
        isAuthenticated.value = {
            user: user,
            role: 'user',
        }

        // 跳转到 About 页面
        router.push({ name: 'Home' })
    } catch (error) {
        alert(error.message)
    }
}
</script>
