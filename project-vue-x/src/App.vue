<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Bienvenue !" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Rechercher</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header{
    background-color: rgb(21, 32, 43);
    padding: 20px;
  }
  nav{
    position: fixed;
    top: 10px;
    right: 10px;
  }
  nav a{
    text-decoration: none;
    display: inline-block;
    margin: 10px;
    color: white;
  }
</style>
