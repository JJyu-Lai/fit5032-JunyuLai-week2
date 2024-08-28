<script setup>
// import JSON from './components/JSON.vue';
import BHeader from './components/BHeader.vue';
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue';

</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>
    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <router-view></router-view>
    </main>
  </div>
  <!-- <JSON /> -->
  <!-- <Form /> -->
</template>
