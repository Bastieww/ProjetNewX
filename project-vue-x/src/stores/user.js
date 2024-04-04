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
        axios.post(url + "abonne", idsusers).then(response => {
            console.log(response)
        })
        location.reload();
    }

    async function removeFollow(idsusers) {
        try {
            const response = await axios.delete(url + "abonne/del", {
                data: idsusers
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        location.reload();
    }

    function update(data) {
        axios.put(url+"utilisateur/edit?id="+user.value.utilisateurid,data).then(response => {
            user.value = response.data;
            // Save user to session storage
            sessionStorage.setItem('user', JSON.stringify(response.data));
            location.reload();
    })}

    function login(auth) {
        axios.post(url + "login", auth)
            .then(response => {
                user.value = response.data;
                // Save user to session storage
                sessionStorage.setItem('user', JSON.stringify(response.data));
                location.reload();
            })
            .catch(error => {
                console.error("Error logging in:", error);
                alert("Identifiants incorrects");
            });
    }


    function register(auth) {
        axios.post(url + "utilisateurs/add", auth)
            .then(response => {
                if (response.status === 201) {
                    login(auth);
                }
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


    return { theUsers, user, addFollow, removeFollow, getById, getEstAbonne, getQuiEstAbonne, login, register, update }
})
