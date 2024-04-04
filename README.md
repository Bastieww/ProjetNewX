# ProjetNewX (Le nouveau Y)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-lightgreen?style=flat&logo=vuedotjs&link=https://vuejs.org)](https://vuejs.org)
[![Node.js](https://img.shields.io/badge/Node.js-v18.19.0-darkgreen?style=flat&logo=nodedotjs&link=https://nodejs.org/en)](https://nodejs.org/en)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.2-blue?style=flat&logo=postgresql&link=https://www.docker.com)](https://www.docker.com)
[![PgAdmin 4](https://img.shields.io/badge/PgAdmin%204-8.4-blue?style=flat&link=https://www.pgadmin.org)](https://www.pgadmin.org)
[![Docker](https://img.shields.io/badge/Docker-4.28.0-blue?style=flat&logo=Docker&link=https://www.postgresql.org)](https://www.postgresql.org)


Notre projet actuel vise à créer une plateforme ressemblant à Twitter en utilisant Vue.js pour le frontend, une API JavaScript pour la communication entre le frontend et le backend, et une base de données PostgreSQL pour la gestion des données.

## Installation et Setup

>⚠️ Pour effectuer cette installation vous avez besoin d'installer Docker.

### Installer Docker pour : 
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Linux](https://docs.docker.com/desktop/install/linux-install/)

## Téléchargement du projet

[![Build](https://img.shields.io/badge/Build-passing-green?style=flat&link=https://www.postgresql.org)](https://www.postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-4.28.0-blue?style=flat&logo=Docker&link=https://www.postgresql.org)](https://www.postgresql.org)

### Début de l'installation : 

1. Télécharger le Docker Compose : [Télécharger le Docker Compose](https://github.com/Bastieww/ProjetNewX/releases/tag/0.1)

2. Extraire l'archive du Docker Compose.

3. Aller dans le répertoire `release`.

4. Démarrer un terminal dans ce répertoire.

5. Executer la commande suivantes :
   
```bat
docker compose up
```
### Le projet se lance normalement. 

- - -
### Problème possible :
- Si docker n'est pas reconnu comme commande, vérifier que docker soit bien dans le PATH du système ou de l'utilisateur

# Accédez au projet

Le projet utilise automatiquement plusieurs port. (grâce au [docker compose](https://docs.docker.com/compose/))

> 📢 Les ports utilisés sont configuré dans le compose.yaml

| Service | PORT (Par Default) |
| ------- | ------------------ |
| PostgreSQL | 65500 |
| PgAdmin | 65501 |
| NodeJs API | 9090 |
| NodeJs Vue.js | 65502 |

## Pour accéder au site ( Vue.js )

 🌐 Cliquez pour ouvrir votre navigateur : [`http://localhost:65502`](http://localhost:65502)

- - -
### Les mots de passe :

- PostgreSQL : 

Base de données automatiquement créée.

Le MLD de la base de données :
![MDL](https://cdn.discordapp.com/attachments/1220735136220577953/1225082858478239896/owi.png?ex=661fd652&is=660d6152&hm=30f4c61744c6990c99757de5babe47a8cbe15c125f508533745936a1fb87512b&)

Pour se connecter à la base de données

Utilisateur : `postgres`

Mot de passe : `postgres` 

- PgAdmin : 

> Cliquez pour ouvrir votre navigateur : [`http://localhost:65502`](http://localhost:65501)

Pour se connecter à PgAdmin. 

Email : `postgres@postgres.com`
 
Mot de passe : `postgres` 

> 📢 Host name/address : `PostgresDBApi`
(Pour ajouter la base de données depuis PgAdmin, disponible uniquement grâce à Docker Compose)
![WhereIsIt](https://media.discordapp.net/attachments/1220735136220577953/1225090525552705627/Screenshot_20240403_160502.png?ex=661fdd76&is=660d6876&hm=afa110f4acf214ddb7840c88479d0cbbd37628b34dd773d2d3807e79f69a28de&=&format=webp&quality=lossless&width=1096&height=253)


----------------------------------------------------------------------
# Principe de fonctionnement
### docker compose :

Ici, la commande 'docker compose up' permet de créer 4 images :
- clientapiy
     `correspond au client Vue`
  
- apiy
     `correspond au server node qui sert d'API`
  
- dbapiy
     `correspond à la base de données PostgreSQL`

- pgadmin
     `correspond à l'interface pgAdmin, permettant d'interagir directement avec la base`

  Ces images sont ensuite utilisées pour créer un container sur lequel tournent le client, le serveur, la base et pgAdmin.

  ### Dans le container :

  Le client se base sur le framework Vuejs [![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-lightgreen?style=flat&logo=vuedotjs&link=https://vuejs.org)](https://vuejs.org)
  Les Vues communiquent avec les Stores, qui font la passerelle vers le serveur servant d'API.
  Ce dernier communique avec la base pour les différents changements de données.

