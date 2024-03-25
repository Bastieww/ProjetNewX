import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
  
    const theUsers = ref([
        {
            "name": "GGremie",
            "password": "remission",
            "bio": "Le code c'est la vie",
            "certif": true,
            "mail": "ggremie@mail.com",
            "profilepicture": "image.png",
            "joindate": "décembre 2022",
        },
        {
            "name": "Sky",
            "password": "skaillou",
            "bio": "Loup de la nuit",
            "certif": true,
            "mail": "sky@mail.com",
            "profilepicture": "image.png",
            "joindate": "avril 2017",
        },
        {
            "name": "Bastieww",
            "password": "bastirer",
            "bio": "La bio",
            "certif": false,
            "mail": "bastien@mail.com",
            "profilepicture": "image.png",
            "joindate": "janvier 1998",
        }
        ])

  return { theUsers }
})
