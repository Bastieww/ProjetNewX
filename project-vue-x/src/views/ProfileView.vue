<script setup>
import { useUserStore } from '@/stores/user'
import { ref, computed } from 'vue'
const user = useUserStore()

</script>

<template>
    <div>
    <h3>{{ user.name }}</h3>

    <p class="price">{{ value.price }} €</p>

    <ul>
        <li v-for="star in value.score"
        class="score">*</li>
    </ul>
    <img :src="'src/assets/images/' + value.image" alt="">

    <p class="addToCart">
      <button @click="cart.add(value)">Ajouter au panier</button>
    </p>
    <p class="mamangeCart" v-if="inCart">
      <button @click="cart.add(value)"></button>
    </p>
  </div>
</template>


<style scoped>

</style>