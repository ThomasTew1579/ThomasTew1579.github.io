<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Menu />

  </header>

  <RouterView />
  <Footer />
</template>

<style scoped>


</style>
