const { PrismaClient } = require('@prisma/client')

const express = require('express');
const app = express();
app.use(express.json())

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

const prisma = new PrismaClient()
/*
    Utilisateur
*/

app.get("/utilisateurs", async (req, res) => {
    const users = await prisma.utilisateur.findMany()
    res.json(users)
})

app.post("/utilisateurs/add", async (req, res) => {
    try {
        const user = await prisma.utilisateur.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/utilisateurs/del", async (req, res) => {

    if (req.query.id) {
        try {
            const user = await prisma.utilisateur.delete({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête DELETE" });
    }
})

app.get("/utilisateur", async (req, res) => {
    if (req.query.id) {
        try {
            const users = await prisma.utilisateur.findUnique({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })
            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})

app.put("/utilisateur/edit", async (req, res) => {
    if (req.query.id) {
        try {

            const users = await prisma.utilisateur.update({
                where: {
                    utilisateurid: parseInt(req.query.id)
                },
                data:
                    req.body
            })

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }

})

/*
 * 
 */

/*
        Abonnement
 */

app.get("/est_abonne", async (req, res) => {

    if (req.query.id) {
        try {
            const est_abonnes = await prisma.est_abonne.findMany({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })

            const ids = est_abonnes.map(element => element.uti_utilisateurid);

            const users = await prisma.utilisateur.findMany({
                where: {
                    utilisateurid: { in: ids }
                }
            })

            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})

app.get("/qui_est_abonne", async (req, res) => {
    if (req.query.id) {
        try {
            const est_abonnes = await prisma.est_abonne.findMany({
                where: {
                    uti_utilisateurid: parseInt(req.query.id)
                }
            })

            const ids = est_abonnes.map(element => element.utilisateurid);

            const users = await prisma.utilisateur.findMany({
                where: {
                    utilisateurid: { in: ids }
                }
            })

            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})

app.post("/abonne", async (req, res) => {
    try {
        const abonne = await prisma.est_abonne.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/abonne/del", async (req, res) => {
    if (req.query.id && req.query.idabonne) {
        try {
            const abonne = await prisma.est_abonne.delete({
                where: {
                    utilisateurid_uti_utilisateurid: {
                        utilisateurid: parseInt(req.query.id),
                        uti_utilisateurid: parseInt(req.query.idabonne)
                    }
                }
            })
            console.log(abonne)
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' et/ou 'idabonne' manquant dans la requête DELETE" });
    }
})

/**
 * 
 */

/*
        Post
*/

app.post("/posts/add", async (req, res) => {
    try {
        const posts = await prisma.post.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.get("/posts", async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.get("/post", async (req, res) => {
    if (req.query.id) {
        try {
            const post = await prisma.post.findFirst({
                where: {
                    postid: parseInt(req.query.id)
                }
            })
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre manquant dans la requête GET" });
    }

})

app.delete("/posts/del", async (req, res) => {
    if (req.query.id) {
        try {
            const post = await prisma.post.delete({
                where: {
                    postid: parseInt(req.query.id)
                }
            })
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre manquant dans la requête GET" });
    }
})

/**
 * 
 */

/*
    Like
*/

app.get("/a_like", async (req, res) => {

    if (req.query.id) {
        try {
            
            const a_like = await prisma.like.findMany({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })

            console.log(a_like)

            const ids = a_like.map(element => element.postid);

            console.log(ids)

            const posts = await prisma.utilisateur.findMany({
                where: {
                    postid: { in: ids }
                }
            })

            res.json(posts)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})

app.get("/qui_a_like", async (req, res) => {
    if (req.query.id) {
        try {
            const a_like = await prisma.like.findMany({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })

            const ids = a_like.map(element => element.postid);

            const posts = await prisma.utilisateur.findMany({
                where: {
                    postid: { in: ids }
                }
            })

            res.json(posts)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})

app.post("/abonne", async (req, res) => {
    try {
        const abonne = await prisma.est_abonne.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/abonne/del", async (req, res) => {
    if (req.query.id && req.query.idabonne) {
        try {
            const abonne = await prisma.est_abonne.delete({
                where: {
                    utilisateurid_uti_utilisateurid: {
                        utilisateurid: parseInt(req.query.id),
                        uti_utilisateurid: parseInt(req.query.idabonne)
                    }
                }
            })
            console.log(abonne)
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' et/ou 'idabonne' manquant dans la requête DELETE" });
    }
})

/**
 * 
 */


app.listen(9090, () => {
    console.log("Listen on : 9090")
})