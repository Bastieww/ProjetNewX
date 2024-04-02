<script setup>
import {useUserStore} from '@/stores/user'
import User from '@/components/User.vue'
import { ref,computed, defineComponent } from 'vue';
const users = useUserStore()

</script>

<template>
  <div class="user-container">
    <div v-for="user in users.theUsers.slice(0, 1)">
      <div class="title">
        <svg onclick="javascript:history.go(-1);" class="go-back w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path onclick="javascript:history.go(-1);" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <h1>{{ user.name }}</h1>
      </div>
      <div class="user">
        <div class="user-images" style="display: flex;">
          <div class="banner"></div>
          <p class="profile-background"></p>
          <img :src="'/src/assets/img/image.png' + user.profilepicture" class="user-profile-pic" alt="Profile Picture">
        </div>
        <div class="edit-container">
          <button class="edit-profile-btn">Editer le profile</button>
        </div>
        <div class="user-info">
          <h2>{{ user.name }}</h2>
          <!-- <p>{{ user.arobas }}</p> -->
          <p class="user-bio">{{ user.bio }}</p>
          <p>Rejoint en {{ user.joindate }}</p>
          <div style="display: flex;">
            <p>Following d</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.banner {
  background-color: #cfd9de;
  padding-left: 800px;
  padding-top: 250px;
  width: auto;
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
.col2
  {
    float: left;
    width: 75%; 

    position: absolute;
    right: 0px;

    border-left: 1px solid #0000006b  
  } 
</style>