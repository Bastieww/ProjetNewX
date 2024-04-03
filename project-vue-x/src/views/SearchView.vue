<script setup>
import { useRouter } from 'vue-router';
import {useUserStore} from '@/stores/user'
import User from '@/components/User.vue'
import { ref,computed, watchEffect  } from 'vue';
const users = useUserStore()

const filter = ref("")

const filteredUsers = computed(() =>{
  return users.theUsers.filter(
    usertemp => usertemp.pseudo.toLowerCase().indexOf(filter.value) != -1)
})


if(!users.user)
{
    const router = useRouter()
    router.push({name:"home"})
}


watchEffect(() => {
  filteredUsers.value // Trigger reactivity
})
</script>

<template>
  <div class="list">
    <div class="search-container">
        <input v-model="filter" class="search" placeholder="Rechercher un utilisateur...">
    </div>
    <div class="user-list">
      <div v-for="user in filteredUsers" :key="user.pseudo" class="user-card">
        <img :src="'/img/' + user.urlphotoprofil" class="user-profile-pic" alt="Profile Picture">
        <div class="user-info">
          <div class="splite">
            <span>
              <h3 class="user-name">{{ user.pseudo }}</h3>
              <p class="user-bio">{{ user.bio }}</p>
            </span>
          
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
  position:absolute;
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