/*==============================================================*/
/* Nom de SGBD :  PostgreSQL 8                                  */
/* Date de création :  22/03/2024 16:32:06                      */
/*==============================================================*/



/*==============================================================*/
/* Table : EST_ABONNE                                           */
/*==============================================================*/
create table EST_ABONNE (
   UTILISATEURID        INT4                 not null,
   UTI_UTILISATEURID    INT4                 not null,
   constraint PK_EST_ABONNE primary key (UTILISATEURID, UTI_UTILISATEURID)
);



/*==============================================================*/
/* Table : HASHTAG                                              */
/*==============================================================*/
create table HASHTAG (
   HASHTAGID            SERIAL               not null,
   NOMHASHTAG           VARCHAR(50)          not null,
   constraint PK_HASHTAG primary key (HASHTAGID)
);



/*==============================================================*/
/* Table : "like"                                               */
/*==============================================================*/
create table "like" (
   UTILISATEURID        INT4                 not null,
   POSTID               INT4                 not null,
   constraint PK_LIKE primary key (UTILISATEURID, POSTID)
);





/*==============================================================*/
/* Table : PHOTO                                                */
/*==============================================================*/
create table PHOTO (
   PHOTOID              SERIAL               not null,
   POSTID               INT4                 not null,
   URL                  VARCHAR(200)         not null,
   constraint PK_PHOTO primary key (PHOTOID)
);




/*==============================================================*/
/* Table : POSSEDE                                              */
/*==============================================================*/
create table POSSEDE (
   POSTID               INT4                 not null,
   HASHTAGID            INT4                 not null,
   constraint PK_POSSEDE primary key (POSTID, HASHTAGID)
);






/*==============================================================*/
/* Table : POST                                                 */
/*==============================================================*/
create table POST (
   POSTID               SERIAL               not null,
   POS_POSTID           INT4                 null,
   UTILISATEURID        INT4                 not null,
   TEXTE                VARCHAR(280)         null,
   DATEPUBLICATION      DATE                 null,
   constraint PK_POST primary key (POSTID)
);



/*==============================================================*/
/* Table : RETWEET                                              */
/*==============================================================*/
create table RETWEET (
   UTILISATEURID        INT4                 not null,
   POSTID               INT4                 not null,
   constraint PK_RETWEET primary key (UTILISATEURID, POSTID)
);


/*==============================================================*/
/* Table : UTILISATEUR                                          */
/*==============================================================*/
create table UTILISATEUR (
   PSEUDO               VARCHAR(50)          not null,
   MOTDEPASSE           VARCHAR(50)          not null,
   BIO                  VARCHAR(256)         null,
   CERTIFIE             BOOL                 null,
   MAIL                 VARCHAR(100)         null,
   DATE                 DATE                 null,
   UTILISATEURID        SERIAL               not null,
   URLPHOTOPROFIL       VARCHAR(200)             null,
   constraint PK_UTILISATEUR primary key (UTILISATEURID)
);



alter table EST_ABONNE
   add constraint FK_EST_ABON_EST_ABONN_UTILISAT foreign key (UTILISATEURID)
      references UTILISATEUR (UTILISATEURID)
      on delete restrict on update restrict;

alter table EST_ABONNE
   add constraint FK_EST_ABON_EST_ABONN_UTILISA foreign key (UTI_UTILISATEURID)
      references UTILISATEUR (UTILISATEURID)
      on delete restrict on update restrict;

alter table "like"
   add constraint FK_LIKE_LIKE_UTILISAT foreign key (UTILISATEURID)
      references UTILISATEUR (UTILISATEURID)
      on delete restrict on update restrict;

alter table "like"
   add constraint FK_LIKE_LIKE2_POST foreign key (POSTID)
      references POST (POSTID)
      on delete restrict on update restrict;

alter table PHOTO
   add constraint FK_PHOTO_CONTIENT_POST foreign key (POSTID)
      references POST (POSTID)
      on delete restrict on update restrict;

alter table POSSEDE
   add constraint FK_POSSEDE_POSSEDE_POST foreign key (POSTID)
      references POST (POSTID)
      on delete restrict on update restrict;

alter table POSSEDE
   add constraint FK_POSSEDE_POSSEDE2_HASHTAG foreign key (HASHTAGID)
      references HASHTAG (HASHTAGID)
      on delete restrict on update restrict;

alter table POST
   add constraint FK_POST_APPARTIEN_UTILISAT foreign key (UTILISATEURID)
      references UTILISATEUR (UTILISATEURID)
      on delete restrict on update restrict;

alter table POST
   add constraint FK_POST_REPOND_POST foreign key (POS_POSTID)
      references POST (POSTID)
      on delete restrict on update restrict;

alter table RETWEET
   add constraint FK_RETWEET_RETWEET_UTILISAT foreign key (UTILISATEURID)
      references UTILISATEUR (UTILISATEURID)
      on delete restrict on update restrict;

alter table RETWEET
   add constraint FK_RETWEET_RETWEET2_POST foreign key (POSTID)
      references POST (POSTID)
      on delete restrict on update restrict;


-- Inserting data into HASHTAG table
INSERT INTO HASHTAG (NOMHASHTAG) VALUES ('#PostgreSQL');
INSERT INTO HASHTAG (NOMHASHTAG) VALUES ('#Database');

-- Inserting data into UTILISATEUR table
INSERT INTO UTILISATEUR (PSEUDO, MOTDEPASSE, BIO, CERTIFIE, MAIL, DATE, URLPHOTOPROFIL) VALUES ('Sky', 'password1', 'Je croque la vie à plein crocs UwU', TRUE, 'user1@example.com', '2024-01-01', 'profile1.jpg');
INSERT INTO UTILISATEUR (PSEUDO, MOTDEPASSE, BIO, CERTIFIE, MAIL, DATE, URLPHOTOPROFIL) VALUES ('LeGej', 'password2', '2 frères, 2 fauves', TRUE, 'user2@example.com', '2024-01-02', 'profile2.jpg');

-- Inserting data into POST table
INSERT INTO POST (POS_POSTID, UTILISATEURID, TEXTE, DATEPUBLICATION) VALUES (NULL, 1, 'First post!', '2024-03-22');
INSERT INTO POST (POS_POSTID, UTILISATEURID, TEXTE, DATEPUBLICATION) VALUES (NULL, 2, 'Second post!', '2024-03-23');
INSERT INTO POST (POS_POSTID, UTILISATEURID, TEXTE, DATEPUBLICATION) VALUES (1, 2, 'Je me réponds tout seul parce que je n''ai pas d''amis !', '2024-03-23');

-- Inserting data into PHOTO table
INSERT INTO PHOTO (POSTID, URL) VALUES (1, 'https://example.com/photo1.jpg');
INSERT INTO PHOTO (POSTID, URL) VALUES (2, 'https://example.com/photo2.jpg');

-- Inserting data into "like" table
INSERT INTO "like" (UTILISATEURID, POSTID) VALUES (1, 1);
INSERT INTO "like" (UTILISATEURID, POSTID) VALUES (2, 2);

-- Inserting data into POSSEDE table
INSERT INTO POSSEDE (POSTID, HASHTAGID) VALUES (1, 1);
INSERT INTO POSSEDE (POSTID, HASHTAGID) VALUES (2, 2);

-- Inserting data into EST_ABONNE table
INSERT INTO EST_ABONNE (UTILISATEURID, UTI_UTILISATEURID) VALUES (1, 2);
INSERT INTO EST_ABONNE (UTILISATEURID, UTI_UTILISATEURID) VALUES (2, 1);

-- Inserting data into RETWEET table
INSERT INTO RETWEET (UTILISATEURID, POSTID) VALUES (1, 2);
INSERT INTO RETWEET (UTILISATEURID, POSTID) VALUES (2, 1);

