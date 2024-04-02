<script setup>
import { useUserStore } from '@/stores/user'
import { ref, computed } from 'vue'

const user = useUserStore()

const authpseudo = ref("")
const authpasswd = ref("")

function login() {
  user.login({ 
    pseudo: authpseudo.value, 
    motdepasse: authpasswd.value
  })
}

function logout() {
  user.userLogged = null
}


</script>



<template>
  <div id="auth"> 

    <div id="pseudo" v-if="!user.userLogged">
      <input v-model="authpseudo">
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
