<script setup>
import {useUserStore} from '@/stores/user'
import User from '@/components/User.vue'
import { ref,computed } from 'vue';
const users = useUserStore()

const filter = ref("")

const filteredUsers = computed(() =>{
  return users.theUsers.filter(
    usertemp => usertemp.pseudo.toLowerCase().indexOf(filter.value) != -1)
})
</script>

<template>
  <section>
    <header>
      <div class="post-card">
        <div class="post-head">
          <img :src="'/src/assets/img/image.png'" class="user-profile-pic" alt="Profile Picture">
          <div class="user-info">GGremie</div>
        </div>
        <div class="post-content">
          <textarea class="textareamessage" maxlength="280" placeholder="Mon message..." v-model="newPost"></textarea>
        </div>
        <button @click="post" class="btenvoi">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          Envoyer
        </button>
      </div>
      <div class="post-list">
        <template v-for="parentPost in posts.thePosts.filter(post => !post.pos_postid)">
          <PostComponent :post="parentPost"></PostComponent>
          <div class="child-posts">
            <PostComponent v-for="childPost in posts.thePosts.filter(post => post.pos_postid === parentPost.postid)" :post="childPost"></PostComponent>
          </div>
        </template>
      </div>
    </header>
  </section>
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