<script setup>
  import {usePostStore} from '@/stores/posts'
  import { ref, computed } from 'vue'
  import PostComponent from '@/components/PostComponent.vue'
  import NewPostComponent from '@/components/NewPostComponent.vue'

  const posts = usePostStore();
  const newPost = ref("")

  function post() {
  posts.post(newPost.value)
}
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
           <textarea v-model="newPost"></textarea>
        </div>
        <button @click="post" class="btenvoi">Envoyer</button>
    </div>
      <div class="post-list" v-for="thepost in posts.thePosts">
        <PostComponent :post="thepost"></PostComponent>
      </div>
    </header>
  </section>
</template>

<style>
.btenvoi
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
.middle
{
    border-left: 2px solid #0000004d;
    border-right: 2px solid #0000004d;
}

.post-end
{
    display: flex;
    flex-direction: row;
    height: 50px;

    align-items: center;
    justify-content: space-around;

    color: black;
}

.post-content
{
    padding: 5px;

    border-bottom: 2px solid #0000004d;

    padding-bottom: 20px;
}

.post-card
{
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.post-head
{
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-profile-pic
{
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
}

.user-info
{
    font-weight: bold;
}

.btenvoi
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

</style>