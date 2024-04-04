import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

export const usePostStore = defineStore('posts', () => {

    const thePosts = ref([])
    const thePostsChilds = ref([])
    const url = "http://localhost:9090/"

    const users = useUserStore()

    function post(texte) {

        let newPost = {
            texte: texte,
            //temp
            utilisateurid: users.user.utilisateurid
            //utilisateurId: utilisateurId,
        }
        axios.post(url + "posts/add", newPost).then(response => {
            location.reload()
        })
    
    }

    function answer(texte, idansweredpost) {

        let newPost = {
            texte: texte,
            pos_postid: idansweredpost,
            //temp
            utilisateurid: users.user.utilisateurid
            //utilisateurId: utilisateurId,
        }
        axios.post(url + "posts/add", newPost).then(response => {

            location.reload()
        })
    }

    async function getLikes(postid) {
        let u = await axios.get(url + "qui_a_like?id=" + postid)
        return u
    }

    async function getRts(postid) {
        let u = await axios.get(url + "qui_a_retweet?id=" + postid)
        return u
    }
    

    axios.get(url + "posts").then(response => {
        var temp = Array.from(response.data).filter(p => p.pos_postid == null)//Enleve les posts "enfants"
        temp.sort((a, b) => a.postid < b.postid ? 1 : -1)
        thePosts.value = temp
    })                                                                        //OOOOOUUUUOUOUUUU LE CODE GOOOFFYYYY BY BASTIEWWW

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
            location.reload();
        }
        )
    }

    async function unlike(ids) {
        try {
            const response = await axios.delete(url + "like/del",{params: ids});
            location.reload();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    function rt(iduser, id)
    {
        var temp = {
            utilisateurid : parseInt(iduser),
            postid : parseInt(id)
        }
        axios.post(url+"retweet",temp).then(response => {
            location.reload();
        }
        )
    }

    async function unrt(ids) {
        try {
            const response = await axios.delete(url + "retweet/del",{params: ids});
            location.reload();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return { thePosts, thePostsChilds, post, answer,getLikes, like, rt, unlike, getRts, unrt }
})
