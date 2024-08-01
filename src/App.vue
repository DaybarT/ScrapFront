<template >
  <header>
    <navbar />
    <searcher />
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import navbar from './components/navbar.vue';
import searcher from './components/searcher.vue';

</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>

