<template>
    <pre>{{ count }}</pre>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'; // 导入 onMounted
import axios from 'axios';

const count = ref(null);
const error = ref(null);

// 异步方法，用于获取书籍计数
const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-doxhv7224a-uc.a.run.app');
    count.value = response.data;
    error.value = null; // 清除任何之前的错误
  } catch (err) {
    console.log('Error getting book count:', err);
    error.value = 'Failed to fetch book count'; // 友好错误信息
    count.value = null; // 清除之前的计数
  }
};

// 使用 onMounted 在组件挂载后自动调用 getBookCount
onMounted(() => {
  getBookCount();
});
</script>