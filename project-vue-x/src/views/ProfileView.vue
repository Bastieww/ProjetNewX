<script setup>
import { useUserStore } from '@/stores/user'
import User from '@/components/User.vue'
import { useRouter } from 'vue-router';
import { ref, computed, defineComponent } from 'vue';

const users = useUserStore()
if (!users.user) {
  const router = useRouter()
  router.push({ name: "home" })
}

const editpseudo = ref("")
const editpasswd = ref("")
const editmail = ref("")
const editbio = ref("")

let editingProfile = ref(false)

function editingProfileSwap() {
  editingProfile.value = !editingProfile.value
  editpseudo.value = users.user.pseudo
  editpasswd.value = users.user.motdepasse
  editmail.value = users.user.mail
  editbio.value = users.user.bio
}

function edit() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (editpseudo.value && editpasswd.value && editmail.value && emailRegex.test(editmail.value)) {
    users.update({
      pseudo: editpseudo.value,
      motdepasse: editpasswd.value,
      mail: editmail.value,
      bio:  editbio.value
    });
    
  } else {
    alert("Pseudo,password and mail are required and email must be in a valid format");
  }
}

var usersAbo = ref([])
var usersFollowers = ref([])
users.getEstAbonne(users.user.utilisateurid).then(response => usersAbo.value = response.data)
users.getQuiEstAbonne(users.user.utilisateurid).then(response => usersFollowers.value = response.data)

</script>
<template>
  <div v-if="usersAbo && usersFollowers"></div><!-- Malicieux stratagème pour charger les variables -->
  <div class="user-container">
    <div>
      <div class="title">
        <svg onclick="javascript:history.go(-1);" class="go-back w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path onclick="javascript:history.go(-1);" stroke-linecap="round" stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <h1>@{{ users.user.pseudo }} <img class="icon" src="/img/Twitter_Verified_Badge.svg" v-if="users.user.certifie"></h1>
      </div>
      <div class="user">
        <div class="user-images" style="display: flex;">
          <div class="banner"></div>
          <p class="profile-background"></p>
          <img :src="'/img/' + users.user.urlphotoprofil" class="user-profile-pic" alt="Profile Picture">
        </div>
        <div v-if="!editingProfile">
          <div class="edit-container">
            <button class="edit-profile-btn" @click="editingProfileSwap">Editer le profil</button>
          </div>
          <div class="user-info">
            <h2>{{ users.user.pseudo }}</h2>
            <p class="user-bio">{{ users.user.bio }}</p>
            <p>Membre depuis le {{ users.user.date }}</p>
            <div>
              <div style="display: flex;">
                <p>Follows : {{ usersAbo.length }}</p>
              </div>
              <div style="display: flex;">
                <p>Followers : {{ usersFollowers.length }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="temp">
          <input v-model="editpseudo" >
          <input v-model="editpasswd" >
          <input v-model="editmail" type="email">
          <input v-model="editbio" >
          
          <button @click="edit">Modifier
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
input 
{
  width: 80%;
  border-radius: 8px;
  border: solid gray 3px;
  padding: 5px;
  margin: 5px;
}

h1{
  display: flex;
  flex-direction: row;
  align-items: center;
  
}

.temp {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button
{
  display: flex;
  align-items: center;

  padding: 10px;
  justify-content: center;
  width: 25%;
  
  border-radius: 8px;
}

.banner {
  background-color: #cfd9de;
  padding-left: 800px;
  padding-top: 250px;
  width: 100%;
}

.edit-container {
  margin: 10px 0px 20px 650px;
  
}

.edit-profile-btn {
  padding: 10px;
  margin: 10px;

  background-color: white;
  border-radius: 10px;

  color: black;
}

.go-back {
  border-radius: 60%;
  width: 30px;
  height: 30px;
  background-color: white;
  margin: 4px 10px 0px 5px;
}

.go-back:hover {
  background-color: lightgray;
}

.profile-background {
  background-color: white;
  width: 160px;
  height: 160px;
  border-radius: 60%;
  position: absolute;
  margin: 170px 0px 0px 20px;
}

.title {
  display: flex;
}

.user-info {
  margin-left: 20px;
}

.user-profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 60%;
  position: absolute;
  margin: 175px 0px 0px 25px;
}

.col2 {
  float: left;
  width: 75%;

  position: absolute;
  right: 0px;

  border-left: 1px solid #0000006b
}

.icon {
  height: 30px;
  width: 30px;
  margin-right: 10px;
} 
</style>