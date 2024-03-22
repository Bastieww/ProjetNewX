<script setup>

const users = useUserStore()

const filter = ref("")

const filteredUser = computed(() =>{
  return users.theUsers.filter(
    usertemp => usertemp.name.toLowerCase().indexOf(filter.value) != -1)
  
})
</script>

<template>
<h1>Qui allez-vous rencontrer aujourd'hui ?</h1>
<input v-model="search"/>

</template>
