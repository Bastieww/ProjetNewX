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
        },
        {
            "name": "Daniel",
            "password": "CRZ65BCQ4TT",
            "bio": "augue malesuada malesuada.",
            "certif": true,
            "mail": "nam.ac@icloud.net",
            "profilepicture": "image.png"
        },
        {
            "name": "Lewis",
            "password": "YMT21HCW8UX",
            "bio": "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
            "certif": false,
            "mail": "dolor.dapibus.gravida@outlook.org",
            "profilepicture": "image.png"
        },
        {
            "name": "Mollie",
            "password": "SHV07RCB4IT",
            "bio": "elementum, lorem ut aliquam iaculis,",
            "certif": false,
            "mail": "molestie.orci.tincidunt@icloud.com",
            "profilepicture": "image.png"
        },
        {
            "name": "Yvonne",
            "password": "YFS51NPK7FW",
            "bio": "interdum. Sed auctor odio a",
            "certif": true,
            "mail": "pede.et@aol.edu",
            "profilepicture": "image.png"
        },
        {
            "name": "Rooney",
            "password": "JDF73SUU5ZH",
            "bio": "urna. Ut tincidunt vehicula risus. Nulla eget metus",
            "certif": false,
            "mail": "a@protonmail.couk",
            "profilepicture": "image.png"
        },
        {
            "name": "Vivian",
            "password": "STS84EZE2NG",
            "bio": "Nam interdum enim non nisi. Aenean eget metus.",
            "certif": false,
            "mail": "elit.etiam.laoreet@hotmail.edu",
            "profilepicture": "image.png"
        },
        {
            "name": "Hadassah",
            "password": "CQM76XQW5TD",
            "bio": "sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
            "certif": false,
            "mail": "nec.enim.nunc@icloud.ca",
            "profilepicture": "image.png"
        },
        {
            "name": "Oliver",
            "password": "OJE42YSV4SJ",
            "bio": "lacus, varius et, euismod et, commodo at, libero. Morbi",
            "certif": true,
            "mail": "semper.dui@yahoo.net",
            "profilepicture": "image.png"
        },
        {
            "name": "Nina",
            "password": "HJI28TMD4FF",
            "bio": "congue turpis. In condimentum. Donec at arcu. Vestibulum ante",
            "certif": true,
            "mail": "pellentesque.ut.ipsum@aol.com",
            "profilepicture": "image.png"
        },
        {
            "name": "Ivan",
            "password": "RBU99HNG8YN",
            "bio": "nec, mollis vitae, posuere at, velit. Cras",
            "certif": true,
            "mail": "viverra.maecenas@outlook.com",
            "profilepicture": "image.png"
        },
        {
            "name": "Myra",
            "password": "QFT48QPI7MV",
            "bio": "sodales purus, in molestie",
            "certif": false,
            "mail": "risus.donec.egestas@hotmail.net",
            "profilepicture": "image.png"
        },
        {
            "name": "Sage",
            "password": "LWN61KXJ2VF",
            "bio": "cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada",
            "certif": false,
            "mail": "nibh.vulputate@icloud.ca",
            "profilepicture": "image.png"
        },
        {
            "name": "Dylan",
            "password": "KSI16NIE2BC",
            "bio": "egestas. Aliquam nec enim. Nunc ut erat.",
            "certif": false,
            "mail": "placerat.orci@google.org",
            "profilepicture": "image.png"
        },
        {
            "name": "Austin",
            "password": "DBQ68XFR5KQ",
            "bio": "nascetur ridiculus mus. Proin vel",
            "certif": false,
            "mail": "montes.nascetur@protonmail.ca",
            "profilepicture": "image.png"
        },
        {
            "name": "Scarlett",
            "password": "ULH27FBX4DQ",
            "bio": "lorem ac risus. Morbi metus.",
            "certif": true,
            "mail": "malesuada.fames@aol.net",
            "profilepicture": "image.png"
        },
        {
            "name": "Cally",
            "password": "TJD41PWX6BW",
            "bio": "iaculis odio. Nam interdum enim non nisi. Aenean eget",
            "certif": false,
            "mail": "adipiscing.fringilla@outlook.edu",
            "profilepicture": "image.png"
        },
        {
            "name": "Brady",
            "password": "JTV10KER0DJ",
            "bio": "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc",
            "certif": true,
            "mail": "arcu.iaculis@outlook.edu",
            "profilepicture": "image.png"
        },
        {
            "name": "Emi",
            "password": "YBE47VOE5DC",
            "bio": "facilisis non, bibendum sed,",
            "certif": false,
            "mail": "sit.amet.ornare@protonmail.org",
            "profilepicture": "image.png"
        },
        {
            "name": "Keiko",
            "password": "VRR58NVG0DJ",
            "bio": "auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,",
            "certif": false,
            "mail": "ornare.placerat@aol.net",
            "profilepicture": "image.png"
        },
        {
            "name": "Erica",
            "password": "SQP70ZJK8CC",
            "bio": "consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.",
            "certif": true,
            "mail": "mauris.sagittis@aol.org",
            "profilepicture": "image.png"
        }
        ])

  return { theUsers }
})
