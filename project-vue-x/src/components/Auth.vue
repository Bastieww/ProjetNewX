<script setup>
import { useUserStore } from '@/stores/user'
import { ref, computed } from 'vue'

const user = useUserStore()

const authpseudo = ref("")
const authpasswd = ref("")

function login() {
  
  if (authpseudo.value && authpasswd.value) {
    user.login({
    pseudo: authpseudo.value,
    motdepasse: authpasswd.value
  })
    
  } else {
    alert("All fields are required to connect");
  }
}

const creatingNewAccount = ref(false)

function creatingNewAccountSwap() {
  creatingNewAccount.value = !creatingNewAccount.value
}

const newpseudo = ref("")
const newpasswd = ref("")
const newmail = ref("")
function register() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (newpseudo.value && newpasswd.value && newmail.value && emailRegex.test(newmail.value)) {
    user.register({
      pseudo: newpseudo.value,
      motdepasse: newpasswd.value,
      mail: newmail.value
    });
    
  } else {
    alert("All fields are required and email must be in a valid format");
  }
}







</script>



<template>
  <div id="auth">
    <h2>Connectez-vous pour interagir avec Y ! (Login : Sky, Password : password1)</h2>
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
      <div>
      <button @click="creatingNewAccountSwap">Pas de compte ? Créez-en un !</button>
      <div v-if="creatingNewAccount" class="createaccount">
        <input v-model="newpseudo" placeholder="Pseudo..." required>
        <input v-model="newpasswd" placeholder="Mot de passe..." required>
        <input v-model="newmail" placeholder="Mail..." type="email">
        <button @click="register">Créer le compte
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
    </div>
    


  </div>
</template>



<style scoped>
.createaccount
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input,
button {
  margin: 15px;
  padding: 10px;
  border-radius: 8px;
}

button:hover {
  background-color: black;
  color: white;
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
  align-items: center;
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
