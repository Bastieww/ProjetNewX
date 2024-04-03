import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('posts', () => {

    const thePosts = ref([])
    const thePostsChilds = ref([])
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

    function answer(texte, idansweredpost) {

        let newPost = {
            texte: texte,
            pos_postid: idansweredpost,
            //temp
            utilisateurid: 1
            //utilisateurId: utilisateurId,
        }
        axios.post(url + "posts/add", newPost).then(response => {
            thePosts.value.splice(0, 0, newPost)
        })
    }

    async function getLikes(postid) {
        let u = await axios.get(url + "nbrlike?id=" + postid)
        console.log("u " + u)
        return u
    }

    axios.get(url + "posts").then(response => {
        var temp = Array.from(response.data).filter(p => p.pos_postid == null)//Enleve les posts "enfants"
        temp.sort((a, b) => a.postid < b.postid ? 1 : -1)
        thePosts.value = temp
    })                                                                                                              //OOOOOUUUUOUOUUUU LE CODE GOOOFFYYYY BY BASTIEWWW

    axios.get(url + "posts").then(response => {
        var temp = Array.from(response.data).filter(p => p.pos_postid != null)//Ne garde que les posts "enfants"
        temp.sort((a, b) => a.postid < b.postid ? 1 : -1)
        thePostsChilds.value = temp
    })

    function like(iduser , id) {
        var temp = {
            utilisateurid : parseInt(iduser),
            postid : parseInt(id)
        }
        axios.post(url+"like",temp).then(response => {
            return response.data;
        }
        )
    }

    function rt(iduser, id)
    {
        var temp = {
            utilisateurid : parseInt(iduser),
            postid : parseInt(id)
        }
        axios.post(url+"retweet",temp).then(response => {
            return response.data;
        }
        )
    }

    return { thePosts, thePostsChilds, post, answer,getLikes, like, rt }
})
