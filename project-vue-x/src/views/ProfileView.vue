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
        <button>Left arrow</button>
        <h1>{{ user.name }}</h1>
      </div>
      <div class="user">
        <div class="user-images" style="display: flex;">
          <p class="banner"></p>
          <p class="profile-background"></p>
          <img :src="'/src/assets/img/' + user.profilepicture" class="user-profile-pic" alt="Profile Picture">
          <button class="edit-profile btn-blanc">Editer le profile</button>
        </div>
        <h2>Bonjour {{ user.name }} !</h2>
        <!-- <p>{{ user.arobas }}</p> -->
        <p class="user-bio">{{ user.bio }}</p>
        <p>Rejoint en {{ user.joindate }}</p>
        <div>
          <p>Following</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.banner {
  background-color: #cfd9de;
  padding: 200px 200px 200px 200px;
}
.edit-profile {
  padding: 5px 5px 5px 5px;
  height: 30px;
}
.profile-background {
  background-color: white;
  width: 160px;
  height: 160px;
  border-radius: 60%;
}
.title {
  display: flex;
}
.user-profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 60%;
  margin: 5px 0px 0px 5px;
  position: absolute;
}
</style>