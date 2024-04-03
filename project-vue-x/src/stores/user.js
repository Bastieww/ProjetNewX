import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('users', () => {
    const theUsers = ref([])
    const user = ref(JSON.parse(sessionStorage.getItem('user')) || null) // Get user from session storage

    const url = "http://localhost:9090/"

    axios.get(url + "utilisateurs").then(response => {
        theUsers.value = response.data
    })

    function addFollow(idsusers) {
        axios.post(url+"abonne", idsusers).then( response => {
            console.log(response)
        })
    }

    function removeFollow(idsusers) {
        console.log(idsusers)
        console.log(url+"abonne/del")
        
        axios.delete(url+"abonne/del", idsusers).then( response => {
            console.log(response)
        })
    }

    function login(auth) {
        console.log(auth + url)
        axios.post(url + "login", auth).then(response => {
            user.value = response.data
            // Save user to session storage
            sessionStorage.setItem('user', JSON.stringify(response.data))
        })
    }

    async function getById(id) {
        let u = await axios.get(url + "utilisateur?id=" + id)
        return u
    }

    function getEstAbonne(id) {
        let abo = axios.get(url + "est_abonne?id=" + id)
        return abo
    }

    function getQuiEstAbonne(id) {
        let abo = axios.get(url + "qui_est_abonne?id=" + id)
        return abo
    }

    return { theUsers, user, addFollow, removeFollow, getById, getEstAbonne,getQuiEstAbonne , login }
})
