import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('posts', () => {

    const thePosts = ref([])
    const url = "http://localhost:9090/"
    function post(texte) {

        let newPost = {
            texte: texte,
            //temp
            utilisateurid: 1
            //utilisateurId: utilisateurId,
        }
        axios.post(url + "posts/add", newPost).then(response => {
            thePosts.value.splice(0, 0, newPost)
        })
    }
        axios.get(url + "posts").then(response => {
            var temp = Array.from(response.data).filter(p => p.pos_postid == null)//Enleve les posts "enfants"
            temp.sort((a,b)=>a.postid<b.postid?1:-1)
            thePosts.value = temp
        })
    return { thePosts, post }
})
