<script setup>
// import JSON from './components/JSON.vue';
import { count } from 'firebase/firestore';
import BHeader from './components/BHeader.vue';
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue';
import CountBookAPIView from './views/CountBookAPIView.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();

const showHeader = computed(() => {
  return !route.path.includes('API')
})
</script>

<template>
  <!-- <div class="main-container"> -->
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <router-view></router-view>
    </main>
  <!-- </div> -->
  <!-- <JSON /> -->
  <!-- <Form /> -->
</template>
