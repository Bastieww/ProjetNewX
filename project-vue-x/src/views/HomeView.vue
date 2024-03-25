<script setup>
  import {usePostStore} from '@/stores/posts'
  import PostComponent from '@/components/PostComponent.vue'

  const posts = usePostStore().thePosts;
</script>

<template>
  <section>
    <header>
      <div class="post-list" v-for="thepost in posts">
        <PostComponent :post="thepost"></PostComponent>
      </div>
    </header>
  </section>
</template>

<style>

</style>