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
  <div class="list">
    <div class="search-container">
        <input v-model="filter" class="search" placeholder="Rechercher un utilisateur...">
    </div>
    <div class="user-list">
      <div v-for="user in filteredUsers" :key="user.name" class="user-card">
        <img :src="'/src/assets/img/' + user.profilepicture" class="user-profile-pic" alt="Profile Picture">
        <div class="user-info">
          <div class="splite">
            <span>
              <h3 class="user-name">{{ user.name }}</h3>
              <p class="user-bio">{{ user.bio }}</p>
            </span>
          <button class="btfollow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            Follow
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.splite
{
  display: flex;
  flex-direction: row;
}

.btfollow
{
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  padding: 5px;
  align-items: center;
  position: absolute;
  right: 50px;
  cursor: pointer;
}

.btfollow:hover
{
  background-color: white;
  color: black;
}

.icon
{
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.search-container
{
  display: flex;
  flex-direction: column;
  align-items: center;
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

.search:focus
{
  transform: scale(0.5) 
  
}

img
{
  height: 60px;
  width: 60px;
  border-radius: 50%;
}


.user-card
{
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  padding: 15px;

  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  
}

.user-info
{
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>