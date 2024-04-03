<script setup>
import { usePostStore } from '@/stores/posts'
import { useUserStore } from '@/stores/user'
import { ref, computed } from 'vue'
import PostComponent from '@/components/PostComponent.vue'
import NewPostComponent from '@/components/NewPostComponent.vue'
import Auth from "@/components/Auth.vue"

const posts = usePostStore();
const newPost = ref("")
const user = useUserStore()

function post() {
  posts.post(newPost.value)
}
</script>

<template>
  <section>
    <header>
      <div v-if="user.user">
        <div class="post-card">
          <div class="post-head">
            <img :src="'/src/assets/img/' + user.user.urlphotoprofil" class="user-profile-pic" alt="Profile Picture">
            <div class="user-info">Connecté en tant que {{ user.user.pseudo }}</div>
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
      </div>
      
      <div v-if="!user.user">
        <Auth />
      </div>

      <div v-else>
        <div class="post-list" v-for="thepost in posts.thePosts">
          <PostComponent :post="thepost"></PostComponent>
          <div class="childs">
            <div class="post-card"
              v-for="thepostchild in posts.thePostsChilds.filter(child => child.pos_postid == thepost.postid)">
              <PostComponent :post="thepostchild"></PostComponent>
            </div>
          </div>
        </div>
      </div>

    </header>
  </section>
</template>

<style>
.btenvoi {
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

.middle {
  border-left: 2px solid #0000004d;
  border-right: 2px solid #0000004d;
}

.post-end {
  display: flex;
  flex-direction: row;
  height: 50px;

  align-items: center;
  justify-content: space-around;

  color: black;
}

.post-content {
  padding: 5px;

  border-bottom: 2px solid #0000004d;

  padding-bottom: 20px;
}

.post-card {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.post-head {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-profile-pic {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
}

.user-info {
  font-weight: bold;
}

.btenvoi {
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

.btfollow:hover {
  background-color: white;
  color: black;
}

.icon {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.textareamessage {
  border-radius: 8px;
  border: 2px solid gray;
  width: 98%;
  resize: vertical;
  padding: 5px;
  max-height: 100px;
  font-size: large;
  min-height: 28px;
}
</style>