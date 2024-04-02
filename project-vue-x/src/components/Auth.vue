<script setup>
import { useUserStore } from '@/stores/user'
import { ref, computed } from 'vue'

const user = useUserStore()

const authlogin = ref("")
const authpasswd = ref("")

function login() {
  user.login({ 
    login: authlogin.value, 
    password: authpasswd.value
  })
}

function logout() {
  user.userLogged = null
}


</script>



<template>
  <div id="auth"> 

    <div id="login" v-if="!user.userLogged">
      <input v-model="authlogin">
      <input v-model="authpasswd">

      <button @click="login">Se Connecter</button>
    </div>

    <div id="logout" v-if="user.userLogged">
      <button @click="logout">Se Déconnecter</button>
    </div>



  </div>
</template>



<style scoped>
</style>
