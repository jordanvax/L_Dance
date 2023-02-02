USE L_DANCE;
DROP TABLE IF EXISTS jours;
DROP TABLE IF EXISTS cours;
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS professeur;

CREATE TABLE professeur (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nom varchar(100),
  style varchar(100)
);

CREATE TABLE sections (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nom varchar(100)
);

CREATE TABLE jours (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  label varchar(20)
);

CREATE TABLE `cours` (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nom varchar(100),
  id_Professeur int,
  sections_id int,
  horaire_debut date,
  horaire_fin date,
  id_jours int,
  photo varchar(250),
  Foreign Key (id_Professeur) REFERENCES professeur(id),
  Foreign Key (sections_id) REFERENCES sections(id),
  Foreign Key (id_jours) REFERENCES jours(id)
);