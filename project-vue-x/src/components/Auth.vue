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
    <p>Connectez-vous pour interagir avec Y ! (Login : Sky, Password : password1)</p>
    <h3>Vous devez être connecté pour voir les posts</h3>

    <div id="pseudo" v-if="!user.userLogged">
      <input v-model="authpseudo" placeholder="Login">
      <input v-model="authpasswd" placeholder="Mot de passe..." type="password">

      <button @click="login">Se Connecter
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>

    <div id="logout" v-if="user.userLogged">
      <button @click="logout">Se Déconnecter</button>
    </div>



  </div>
</template>



<style scoped>
input,
button {
  margin: 15px;
  padding: 10px;
  border-radius: 8px;
}

#auth {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px;
}

button {
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
}

#pseudo {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.icon {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
</style>
