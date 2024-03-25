CREATE DATABASE IF NOT EXISTS projetnewx;
USE projetnewx;

DROP TABLE IF EXISTS AIME;
DROP TABLE IF EXISTS RETWEET;
DROP TABLE IF EXISTS POST;
DROP TABLE IF EXISTS POSSEDE;
DROP TABLE IF EXISTS HASHTAG;
DROP TABLE IF EXISTS PHOTO;
DROP TABLE IF EXISTS EST_ABONNE;
DROP TABLE IF EXISTS UTILISATEUR;

/*==============================================================*/
/* Nom de SGBD :  MySQL                                         */
/* Date de création :  22/03/2024 16:32:06                      */
/*==============================================================*/

/*==============================================================*/
/* Table : EST_ABONNE                                           */
/*==============================================================*/
CREATE TABLE EST_ABONNE (
   UTILISATEURID        INT                 NOT NULL,
   UTI_UTILISATEURID    INT                 NOT NULL,
   PRIMARY KEY (UTILISATEURID, UTI_UTILISATEURID)
);



/*==============================================================*/
/* Table : PHOTO                                                */
/*==============================================================*/
CREATE TABLE PHOTO (
   PHOTOID              INT                 NOT NULL AUTO_INCREMENT,
   POSTID               INT                 NOT NULL,
   URL                  VARCHAR(200)        NOT NULL,
   PRIMARY KEY (PHOTOID)
);




/*==============================================================*/
/* Table : POSSEDE                                              */
/*==============================================================*/
CREATE TABLE POSSEDE (
   POSTID               INT                 NOT NULL,
   HASHTAGID            INT                 NOT NULL,
   PRIMARY KEY (POSTID, HASHTAGID)
);


/*==============================================================*/
/* Table : POST                                                 */
/*==============================================================*/
CREATE TABLE POST (
   POSTID               INT                 NOT NULL AUTO_INCREMENT,
   POS_POSTID           INT, -- Assuming NULL is allowed here, modify if necessary
   UTILISATEURID        INT                 NOT NULL,
   TEXTE                VARCHAR(280),
   DATEPUBLICATION      DATE,
   PRIMARY KEY (POSTID)
);

/*==============================================================*/
/* Table : RETWEET                                              */
/*==============================================================*/
CREATE TABLE RETWEET (
   UTILISATEURID        INT                 NOT NULL,
   POSTID               INT                 NOT NULL,
   PRIMARY KEY (UTILISATEURID, POSTID)
);


/*==============================================================*/
/* Table : HASHTAG                                              */
/*==============================================================*/
CREATE TABLE HASHTAG (
   HASHTAGID            INT                 NOT NULL AUTO_INCREMENT,
   NOMHASHTAG           VARCHAR(50)         NOT NULL,
   PRIMARY KEY (HASHTAGID)
);

/*==============================================================*/
/* Table : UTILISATEUR                                          */
/*==============================================================*/
CREATE TABLE UTILISATEUR (
   PSEUDO               VARCHAR(50)         NOT NULL,
   MOTDEPASSE           VARCHAR(50)         NOT NULL,
   BIO                  VARCHAR(256),
   CERTIFIE             BOOLEAN,
   MAIL                 VARCHAR(100),
   DATE                 DATE,
   UTILISATEURID        INT                 NOT NULL AUTO_INCREMENT,
   URLPHOTOPROFIL       VARCHAR(200),
   PRIMARY KEY (UTILISATEURID)
);


/*==============================================================*/
/* Table : AIME                                               */
/*==============================================================*/
CREATE TABLE AIME (
   UTILISATEURID        INT                 NOT NULL,
   POSTID               INT                 NOT NULL,
   PRIMARY KEY (UTILISATEURID, POSTID)
);





ALTER TABLE EST_ABONNE
   ADD CONSTRAINT FK_EST_ABON_EST_ABONN_UTILISAT FOREIGN KEY (UTILISATEURID)
      REFERENCES UTILISATEUR (UTILISATEURID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE EST_ABONNE
   ADD CONSTRAINT FK_EST_ABON_EST_ABONN_UTILISA FOREIGN KEY (UTI_UTILISATEURID)
      REFERENCES UTILISATEUR (UTILISATEURID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE AIME
   ADD CONSTRAINT FK_LIKE_LIKE_UTILISAT FOREIGN KEY (UTILISATEURID)
      REFERENCES UTILISATEUR (UTILISATEURID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE AIME
   ADD CONSTRAINT FK_LIKE_LIKE2_POST FOREIGN KEY (POSTID)
      REFERENCES POST (POSTID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PHOTO
   ADD CONSTRAINT FK_PHOTO_CONTIENT_POST FOREIGN KEY (POSTID)
      REFERENCES POST (POSTID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE POSSEDE
   ADD CONSTRAINT FK_POSSEDE_POSSEDE_POST FOREIGN KEY (POSTID)
      REFERENCES POST (POSTID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE POSSEDE
   ADD CONSTRAINT FK_POSSEDE_POSSEDE2_HASHTAG FOREIGN KEY (HASHTAGID)
      REFERENCES HASHTAG (HASHTAGID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE POST
   ADD CONSTRAINT FK_POST_APPARTIEN_UTILISAT FOREIGN KEY (UTILISATEURID)
      REFERENCES UTILISATEUR (UTILISATEURID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE POST
   ADD CONSTRAINT FK_POST_REPOND_POST FOREIGN KEY (POS_POSTID)
      REFERENCES POST (POSTID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE RETWEET
   ADD CONSTRAINT FK_RETWEET_RETWEET_UTILISAT FOREIGN KEY (UTILISATEURID)
      REFERENCES UTILISATEUR (UTILISATEURID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE RETWEET
   ADD CONSTRAINT FK_RETWEET_RETWEET2_POST FOREIGN KEY (POSTID)
      REFERENCES POST (POSTID)
      ON DELETE RESTRICT ON UPDATE RESTRICT;


-- Inserting data into HASHTAG table
INSERT INTO HASHTAG (NOMHASHTAG) VALUES ('#PostgreSQL');
INSERT INTO HASHTAG (NOMHASHTAG) VALUES ('#Database');

-- Inserting data into UTILISATEUR table
INSERT INTO UTILISATEUR (PSEUDO, MOTDEPASSE, BIO, CERTIFIE, MAIL, DATE, URLPHOTOPROFIL) VALUES ('user1', 'password1', 'Bio of user1', TRUE, 'user1@example.com', '2024-01-01', 'profile1.jpg');
INSERT INTO UTILISATEUR (PSEUDO, MOTDEPASSE, BIO, CERTIFIE, MAIL, DATE, URLPHOTOPROFIL) VALUES ('user2', 'password2', 'Bio of user2', TRUE, 'user2@example.com', '2024-01-02', 'profile2.jpg');

-- Inserting data into POST table
INSERT INTO POST (POS_POSTID, UTILISATEURID, TEXTE, DATEPUBLICATION) VALUES (NULL, 1, 'First post!', '2024-03-22');
INSERT INTO POST (POS_POSTID, UTILISATEURID, TEXTE, DATEPUBLICATION) VALUES (NULL, 2, 'Second post!', '2024-03-23');

-- Inserting data into PHOTO table
INSERT INTO PHOTO (POSTID, URL) VALUES (1, 'https://example.com/photo1.jpg');
INSERT INTO PHOTO (POSTID, URL) VALUES (2, 'https://example.com/photo2.jpg');

-- Inserting data into AIME table
INSERT INTO AIME (UTILISATEURID, POSTID) VALUES (1, 1);
INSERT INTO AIME (UTILISATEURID, POSTID) VALUES (2, 2); -- Inserting values for the second statement

