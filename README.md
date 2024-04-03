# ProjetNewX (Le nouveau Y)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-lightgreen?style=flat&logo=vuedotjs&link=https://vuejs.org)](https://vuejs.org)
[![Node.js](https://img.shields.io/badge/Node.js-v18.19.0-darkgreen?style=flat&logo=nodedotjs&link=https://nodejs.org/en)](https://nodejs.org/en)
[![Node.js](https://img.shields.io/badge/PostgreSQL-16.2-blue?labelColor=white&style=flat&logo=postgresql&link=https://www.docker.com)](https://www.docker.com)
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

1. Télécharger le Docker Compose :

### > [Télécharger le projet]()

2. Dezip le zip avec le Docker compose 

3. Dans le même répertoire démarrez un terminal

4. Executer les commandes suivantes :
   
```bat
docker compose up
```
### Le projet se lance normalement. 

- - -
### Problème possible :
- Si docker n'est pas reconnu comme commande, vérifier que docker soit bien dans le PATH du système ou de l'utilisateur

# Accédez au projet

Le projet utilise automatiquement (grâce au [docker compose](https://docs.docker.com/compose/)) plusieurs port.

> 📢 Les ports utilisés sont configuré dans le compose.yaml

| Service | PORT (Par Default) |
| ------- | ------------------ |
| PostgreSQL | 65500 |
| PgAdmin | 65501 |
| NodeJs API | 9090 |
| NodeJs Vue.js | 65502 |

### Les mots de passe :

- PostgreSQL : 

> Pour se connecter à la base de données
> 
> Utilisateur : `postgres`
> 
> Mot de passe : `postgres` 

- PgAdmin : 

> Cliquez pour ouvrir votre navigateur : [`http://localhost:65502`](http://localhost:65501)

> Pour se connecter à PgAdmin.
> 
> Email : `postgres@postgres.com`
> 
> Mot de passe : `postgres` 


## Pour accéder au site ( Vue.js )

> 🌐 Cliquez pour ouvrir votre navigateur : [`http://localhost:65502`](http://localhost:65502)



