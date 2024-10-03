<template>
    <pre>{{ books }}</pre>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import db from '../Firebase/init'
  import { collection, query, getDocs } from 'firebase/firestore';
  
  const books = ref([])
  
  const fetchBooks = async () => {
    try {
      let q
        // 显示所有书籍，没有限制
        q = query(collection(db, 'books'))
      // const q = query(collection(db, 'books'), where('isbn', '>', 1000))
      const querySnapshot = await getDocs(q)
      const booksArray = []
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() })
      })
      books.value = booksArray
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }
  
  onMounted(() => {
    fetchBooks()
  })
  </script>
  