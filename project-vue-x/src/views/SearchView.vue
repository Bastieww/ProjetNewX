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
    <h1>Qui allez-vous rencontrer aujourd'hui ?</h1>
    <div class="search-container">
      <input v-model="filter" style="width: 50% ; height: 20px;"  placeholder="Taper pour rechercher...">
    </div>
    <div class="user-list">
      <div v-for="user in filteredUsers" :key="user.name" class="user-card">
        <img :src="'/src/assets/img/' + user.profilepicture" class="user-profile-pic" alt="Profile Picture">
        <div class="user-info">
          <p class="user-name">{{ user.name }}</p>
          <p class="user-bio">{{ user.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.user-container {
  text-align: center;
}

.search-container {
  margin-bottom: 20px;
}

.user-list {
  margin: 0 auto;
  max-width: 400px; /* Adjust as needed */
  text-align: left;
}

.user-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
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

.user-info {
  flex-grow: 1;
  color: black;
}

.user-name {
  font-weight: bold;
}

/* Add additional styling for other user information if needed */
</style>