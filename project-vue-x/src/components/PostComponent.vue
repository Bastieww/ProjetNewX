<script setup>
import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/posts'
import { ref } from 'vue'
import { createPinia } from 'pinia';
const props = defineProps({
    post: {
        required: true
    }
})
const users = useUserStore()
const posts = usePostStore()
const newAnsweringPost = ref("")
var theUser = ref(null)
var usersAbo = ref([])
const utilisateurid = ref()
const uti_utilisateurid = ref()

var likes = ref(null)
posts.getLikes(props.post.postid).then(response => likes.value = response.data)

users.getById(props.post.utilisateurid).then(response => theUser.value = response.data)

users.getEstAbonne(users.user.utilisateurid).then(response => usersAbo.value = response.data)


let answering = ref(false)

function answeringSwap() {
    answering.value = !answering.value
}

function answer() {
    posts.answer(newAnsweringPost.value, props.post.postid)
}

function addFollow(abonneur, abonne) {
    console.log(abonneur.utilisateurid)
    users.addFollow({
        utilisateurid: parseInt(abonneur),
        uti_utilisateurid: parseInt(abonne)
    })
}

function like() {
    posts.like(theUser.value.utilisateurid, props.post.postid)
}

function rt()
{
    posts.rt(theUser.value.utilisateurid, props.post.postid)
}

</script>

<template>
    <div class="post-card" v-if="theUser">
        <div class="post-head">
            <img :src="'/img/' + theUser.urlphotoprofil" class="user-profile-pic" alt="Profile Picture">
            <div class="user-info">{{ theUser.pseudo }}</div>
            <div v-for="abonne in usersAbo">
                <div v-if="abonne.utilisateurid == theUser.utilisateurid">
                    <button class="btunfollow">
                        <span>Following</span>
                    </button>
                </div>
                <div v-else>
                    <button class="btfollow" @click="addFollow(users.user.utilisateurid, theUser.utilisateurid)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        Follow
                    </button>
                </div>
            </div>
        </div>
        <div class="post-content">
            {{ post.texte }}
        </div>
        <div v-if="answering == true" class="post-content">
            <div class="post-card">
                <div class="post-content">
                    <textarea class="textareamessage" maxlength="280" placeholder="Mon message..."
                        v-model="newAnsweringPost"></textarea>
                </div>
                <button @click="answer" class="btenvoi">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    Envoyer
                </button>
            </div>
        </div>
        <div class="post-end" v-if="props.post.pos_postid == null">
            <div class="comment" @click="answeringSwap">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            </div>
            <div class="retweet" @click="rt">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>

            </div>
            <div class="like" @click="like">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <!-- <p>{{ likes.value }}</p> -->

            </div>

        </div>
    </div>
</template>

<style scoped>
.middle {
    border-left: 2px solid #0000004d;
    border-right: 2px solid #0000004d;
}

.post-end {
    display: flex;
    flex-direction: row;
    height: 50px;

    align-items: center;
    justify-content: space-around;

    color: black;
}

.post-content {
    padding: 5px;

    border-bottom: 2px solid #0000004d;

    padding-bottom: 20px;
}

.post-card {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    margin: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.post-head {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-profile-pic {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
}

.user-info {
    font-weight: bold;
}

.btfollow {
    display: flex;
    flex-direction: row;
    background-color: black;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    padding: 5px;
    align-items: center;
    position: absolute;
    right: 50px;
    cursor: pointer;
}

.btfollow:hover {
    background-color: white;
    color: black;
}

.btunfollow {
    display: flex;
    flex-direction: row;
    background-color: white;
    color: black;
    font-weight: bold;
    border-radius: 12px;
    padding: 5px;
    align-items: center;
    position: absolute;
    right: 50px;
    cursor: pointer;
}
.btunfollow:hover {
    background-color: rgba(244, 33, 46, 0.1);
    color: rgba(244, 33, 46);
}
.btunfollow:hover span{
    display: none;
}
.btunfollow:hover::before{
    content: "Unfollow";
}

.icon {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
}
</style>
