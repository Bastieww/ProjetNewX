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

app.post("/login", async (req, res) => {
    if (req.body.pseudo && req.body.motdepasse) {
        try {
            const user = await prisma.utilisateur.findFirst({ where: {
                pseudo: req.body.pseudo,
                motdepasse: req.body.motdepasse
                
            }
        })

            if (user)
            {
                res.status(200).json(user);   
            }
            else
            {
                res.status(403).json();
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'login' et/ou 'password' manquant" });
    }
})


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

            const utilisateur = await prisma.utilisateur.update({
                where: {
                    utilisateurid: parseInt(req.query.id)
                },
                data:
                    req.body
            })
            res.status(200).json(utilisateur);

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
        const abonne = await prisma.est_abonne.create({ 
            data: {
                utilisateurid: req.body.utilisateurid,
                uti_utilisateurid: req.body.uti_utilisateurid
            }
        })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/abonne/del", async (req, res) => {
    const { utilisateurid, uti_utilisateurid } = req.body;
    if (utilisateurid && uti_utilisateurid) {
        try {
            await prisma.est_abonne.delete({
                where: {
                    utilisateurid_uti_utilisateurid: {
                        utilisateurid: utilisateurid,
                        uti_utilisateurid: uti_utilisateurid
                    }
                }
            });
            res.status(204).json();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(400).json({ error: "Parameters 'utilisateurid' and/or 'uti_utilisateurid' missing in DELETE request" });
    }
    
});

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

app.get("/nbrlike", async (req, res) => {

    if (req.query.id) {
        try {

            const nbr = await prisma.like.count({
                where: {
                    postid: parseInt(req.query.id)
                }
            })

            res.json({ nbrlikes: nbr })
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})




app.get("/a_like", async (req, res) => {

    if (req.query.id) {
        try {

            const a_like = await prisma.like.findMany({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })

            const ids = a_like.map(element => element.postid);

            const posts = await prisma.post.findMany({
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
                    postid: parseInt(req.query.id)
                }
            })

            const ids = a_like.map(element => element.utilisateurid);

            const posts = await prisma.utilisateur.findMany({
                where: {
                    utilisateurid: { in: ids }
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

app.post("/like", async (req, res) => {
    try {
        const like = await prisma.like.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/like/del", async (req, res) => {
    if (req.query.id && req.query.postid) {
        try {
            const like = await prisma.like.delete({
                where: {
                    utilisateurid_postid: {
                        utilisateurid: parseInt(req.query.id),
                        postid: parseInt(req.query.postid)
                    }
                }
            })
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' et/ou 'postid' manquant dans la requête DELETE" });
    }
})

/**
 * 
 */

/**
 * Retweet
 */

app.get("/nbrretweet", async (req, res) => {

    if (req.query.id) {
        try {

            const nbr = await prisma.retweet.count({
                where: {
                    postid: parseInt(req.query.id)
                }
            })

            res.json({ "nbrretweet": nbr })
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' manquant dans la requête GET" });
    }
})


app.get("/a_retweet", async (req, res) => {

    if (req.query.id) {
        try {

            const a_retweet = await prisma.retweet.findMany({
                where: {
                    utilisateurid: parseInt(req.query.id)
                }
            })

            const ids = a_retweet.map(element => element.postid);

            const posts = await prisma.post.findMany({
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

app.get("/qui_a_retweet", async (req, res) => {

    if (req.query.id) {
        try {

            const a_retweet = await prisma.retweet.findMany({
                where: {
                    postid: parseInt(req.query.id)
                }
            })

            const ids = a_retweet.map(element => element.utilisateurid);

            const posts = await prisma.utilisateur.findMany({
                where: {
                    utilisateurid: { in: ids }
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

app.post("/retweet", async (req, res) => {
    try {
        const like = await prisma.retweet.create({ data: req.body })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.delete("/retweet/del", async (req, res) => {
    if (req.query.id && req.query.postid) {
        try {
            const retweet = await prisma.retweet.delete({
                where: {
                    utilisateurid_postid: {
                        utilisateurid: parseInt(req.query.id),
                        postid: parseInt(req.query.postid)
                    }
                }
            })
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "Paramètre 'id' et/ou 'postid' manquant dans la requête DELETE" });
    }
})



/**
 * 
 */

app.listen(9090, () => {
    console.log("Listen on : 9090")
})