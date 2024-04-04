<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue'
import { useUserStore } from '@/stores/user'

const logout = () => {
  sessionStorage.removeItem('user');
  location.reload();
};
const users = useUserStore()
</script>

<template>
  <header>
    <div class="splite">
      <nav class="col1">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="iconp">
          <g transform="matrix(17.38641929626465, 0, 0, 17.682165145874023, 39.971553802490234, 36.71841812133789)"
            style="">
            <path
              d="M 18.244 2.25 L 21.552 2.25 L 14.325 10.51 L 15.919 12.618 L 16.084 21.577 L 9.426 21.461 C 9.57 13.771 9.41 12.915 9.41 12.915 L 1.254 2.25 L 8.08 2.25 L 12.793 8.481 L 18.244 2.25 Z M 11.93 19.712 L 14.08 19.77 L 13.74 12.926 L 7.084 4.126 L 5.117 4.126 L 11.848 12.926 L 11.93 19.712 Z"
              style="transform-box: fill-box; transform-origin: 50% 50%;" />
            <path
              d="M 22.654 1.75 L 14.969 10.533 L 16.411 12.44 L 16.863 22.09 L 8.514 21.89 L 8.545 21.373 C 8.942 14.743 8.909 13.654 8.911 13.085 L 0.242 1.75 L 8.329 1.75 L 12.821 7.689 L 18.017 1.75 Z M 12.765 9.273 L 7.831 2.75 L 2.266 2.75 L 9.907 12.742 L 9.91 12.906 C 9.91 12.906 9.94 14.668 9.574 20.915 L 15.813 21.064 L 15.427 12.796 L 13.681 10.487 L 20.45 2.75 L 18.471 2.75 Z M 11.35 13.098 L 4.105 3.626 L 7.333 3.626 L 14.232 12.747 L 14.606 20.284 L 11.436 20.199 Z M 12.346 12.754 L 12.424 19.225 L 13.554 19.256 L 13.248 13.105 L 6.835 4.626 L 6.129 4.626 Z"
              style="fill: none;" transform="matrix(1, 0, 0, 1, 2.3841900542720396e-7, 0)" />
            <path
              d="M 22.654 1.75 L 14.969 10.533 L 16.411 12.44 L 16.863 22.09 L 8.514 21.89 L 8.545 21.373 C 8.942 14.743 8.909 13.654 8.911 13.085 L 0.242 1.75 L 8.329 1.75 L 12.821 7.689 L 18.017 1.75 Z M 12.765 9.273 L 7.831 2.75 L 2.266 2.75 L 9.907 12.742 L 9.91 12.906 C 9.91 12.906 9.94 14.668 9.574 20.915 L 15.813 21.064 L 15.427 12.796 L 13.681 10.487 L 20.45 2.75 L 18.471 2.75 Z M 11.35 13.098 L 4.105 3.626 L 7.333 3.626 L 14.232 12.747 L 14.606 20.284 L 11.436 20.199 Z M 12.346 12.754 L 12.424 19.225 L 13.554 19.256 L 13.248 13.105 L 6.835 4.626 L 6.129 4.626 Z"
              style="fill: none;" transform="matrix(1, 0, 0, 1, 2.3841900542720396e-7, 0)" />
          </g>
        </svg>

        <MenuComponent menuTEXT="Home" to="/"></MenuComponent>
        <div v-if="users.user"><MenuComponent menuTEXT="Explore" to="/search"></MenuComponent></div>
        <div v-if="users.user"><MenuComponent menuTEXT="Profile" to="/profile"></MenuComponent></div>
      </nav>

      <div class="col2">
        <RouterView />
      </div>
      <div v-if="users.user">
        <button class="logout-btn" @click="logout">Logout</button>
      </div>
    </div>

  </header>
</template>

<style scoped>
.iconp {
  height: 50px;
  margin: 20px;
}

header {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}

nav {
  display: flex;
  flex-direction: column;

  position: fixed;
}

nav a {
  padding: 10px;
  margin: 10px;

  background-color: white;
  border-radius: 10px;

  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
}

nav a:hover {
  border: solid 2px #00000080;
  font-weight: bold;
}

.col1 {
  float: left;
  width: 30%;
}

.col2 {
  float: left;
  width: 70%;

  position: absolute;
  right: 0px;

  border-left: 1px solid #0000006b
}

.cheat {
  position: absolute;
  bottom: 0px;
}

.logout-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #ff0000;
  /* Change color as needed */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
<!-- Imene la besti (ou pas en fait lol, elle est italienne et chacun sa route) -->
