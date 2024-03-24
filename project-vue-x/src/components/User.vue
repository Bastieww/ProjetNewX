<script setup>
// import { usePanierStore } from '@/stores/panier';
defineProps({
  value: {
        required: true
  }
})

// const panier = usePanierStore()
</script>

<template>
    <div class="user-container">
      <div class="user-box">
        <p class="user-name">{{ value.name }}</p>
        <p class="user-bio">{{ value.bio }}</p>
        <p class="user-certif">{{ value.certif }}</p>
      </div>
    </div>
  </template>
  

<style scoped>




</style>