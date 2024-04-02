import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', () => {

    const posts = ref([])
    const url = "http://localhost:9090/"
    function post(texte, userId) {
        let newPost = {
          texte: texte,
          //temp
          utilisateurId: 1,
          //utilisateurId: utilisateurId,
          timestamp: Date.now()
        }
        axios.post(url+"posts/add", newPost).then( response => {
            posts.value.splice(0,0,newPost)
        })
      }
    const thePosts = ref([
        {
            "id": "DC0C0C7D-DDD9-183D-62E5-354C27E167F0",
            "texte": "magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim",
            "date": "4/9th/2023",
            "like": 11,
            "repost": 10
        },
        {
            "id": "B8D5F821-C0EE-942F-2279-3DBCC6D4808C",
            "texte": "tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus.",
            "date": "20/2nd/2024",
            "like": 264,
            "repost": 5
        },
        {
            "id": "CE927A0D-B12C-87CB-A2CC-75935DA7D37B",
            "texte": "gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci",
            "date": "6/10th/2023",
            "like": 487,
            "repost": 8
        },
        {
            "id": "91943AEE-C236-96E3-EE46-F82A768D393C",
            "texte": "consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est,",
            "date": "9/3rd/2024",
            "like": 114,
            "repost": 10
        },
        {
            "id": "4CB983FE-413C-1DCF-5C6A-8B4212C29616",
            "texte": "Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget,",
            "date": "11/3rd/2024",
            "like": 87,
            "repost": 7
        },
        {
            "id": "F38227AE-3717-859F-4638-79CA2737D668",
            "texte": "aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum.",
            "date": "11/12th/2023",
            "like": 477,
            "repost": 2
        },
        {
            "id": "ABDDC5B9-B381-B79F-3B7B-1F7E13B52CC5",
            "texte": "Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu",
            "date": "24/4th/2023",
            "like": 455,
            "repost": 3
        },
        {
            "id": "86D67AF1-593C-C44D-E6E0-EDAAA31FE471",
            "texte": "mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna.",
            "date": "19/9th/2023",
            "like": 173,
            "repost": 1
        },
        {
            "id": "83EAD345-AE87-54AC-26C5-52EC77225429",
            "texte": "Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis",
            "date": "16/9th/2023",
            "like": 50,
            "repost": 4
        },
        {
            "id": "A728AC0A-69DB-BE5A-9D93-5DA9575A9B63",
            "texte": "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus",
            "date": "25/8th/2023",
            "like": 409,
            "repost": 7
        },
        {
            "id": "24AAC019-7470-E74E-ED6C-9D8468CBE44D",
            "texte": "sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a,",
            "date": "26/8th/2023",
            "like": 63,
            "repost": 7
        },
        {
            "id": "AE4A7F5D-D43C-DEC3-6E26-44C45CFD8815",
            "texte": "faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat",
            "date": "12/12th/2023",
            "like": 229,
            "repost": 2
        },
        {
            "id": "D164D5B3-5E96-6DD7-DA7D-41E49156236C",
            "texte": "interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam",
            "date": "12/8th/2023",
            "like": 18,
            "repost": 9
        },
        {
            "id": "D72D90FF-4D22-6F6F-A219-C2A301C3BEF9",
            "texte": "justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam.",
            "date": "31/1st/2024",
            "like": 482,
            "repost": 10
        },
        {
            "id": "5354C8C4-EBD1-1E83-9E2F-918250BC7844",
            "texte": "dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at",
            "date": "15/8th/2023",
            "like": 235,
            "repost": 3
        },
        {
            "id": "6E9293E7-3B45-EE04-D139-8966C402C417",
            "texte": "Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",
            "date": "20/3rd/2023",
            "like": 56,
            "repost": 6
        },
        {
            "id": "6439DF1F-CC21-5343-2BEB-155F10BB8F49",
            "texte": "neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies",
            "date": "22/2nd/2024",
            "like": 8,
            "repost": 5
        },
        {
            "id": "D9BD76B7-1669-496E-182D-7F822BC65A46",
            "texte": "Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec",
            "date": "17/2nd/2024",
            "like": 79,
            "repost": 2
        },
        {
            "id": "E2C50B2A-B535-6CBA-5D33-6491285BD28E",
            "texte": "dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec",
            "date": "22/11th/2023",
            "like": 393,
            "repost": 6
        },
        {
            "id": "EE154884-CA51-B25B-BB32-46A6B87E262D",
            "texte": "sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
            "date": "13/7th/2023",
            "like": 34,
            "repost": 4
        }
    ])

  return { thePosts }
})
