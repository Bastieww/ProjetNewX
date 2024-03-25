<script setup>
import {useUserStore} from '@/stores/user'
import User from '@/components/User.vue'
import { ref,computed } from 'vue';
const users = useUserStore()

const filter = ref("")

const filteredUsers = computed(() =>{
  return users.theUsers.filter(
    usertemp => usertemp.name.toLowerCase().indexOf(filter.value) != -1)
  
})
</script>

<template>
  <div class="user-container">
    <div class="search-container">
      <input v-model="filter" class="search" placeholder="Rechercher un utilisateur...">
    </div>
    <div class="user-list">
      <div v-for="user in filteredUsers" :key="user.name" class="user-card">
        <img :src="'/src/assets/img/' + user.profilepicture" class="user-profile-pic" alt="Profile Picture">
        <p class="user-name">{{ user.name }}</p>
        <p class="user-bio">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.user-container {
  text-align: center;
}

.search-container {
  margin-bottom: 10px;
}

.user-list {
  margin: 0 auto;
  max-width: 75%;
  text-align: left;
}

.user-card {
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
}

.user-profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px; 
}

.user-name {
  font-weight: bold;
}

.search
{
  width: 75%; 
  height: 20px; 

  border-radius: 20px;
  padding: 10px;
  margin: 30px;

  border-color: gray ;
}


/* Add additional styling for other user information if needed */
</style>