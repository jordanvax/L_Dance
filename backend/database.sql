USE L_DANCE;
DROP TABLE IF EXISTS jours;
DROP TABLE IF EXISTS cours;
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS professeurs;

CREATE TABLE professeurs (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar(100),
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
  id_Professeurs int,
  sections_id int,
  horaire_debut date,
  horaire_fin date,
  id_jours int,
  photo varchar(250),
  Foreign Key (id_Professeurs) REFERENCES professeurs(id),
  Foreign Key (sections_id) REFERENCES sections(id),
  Foreign Key (id_jours) REFERENCES jours(id)
);

CREATE TABLE `evenements`(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar (100),
  lieu varchar (200),
  description varchar (1000),
  horaire_debut datetime,
  horaire_fin datetime,
  id_Professeurs int,
  photo varchar (150),
  desc_photo varchar (500),
  Foreign Key (id_Professeurs) REFERENCES professeurs(id)
);

INSERT INTO professeurs (id, name, style) VALUES (1, "Vaxelaire amelie", "Modern-Jazz");
INSERT INTO professeurs (id, name, style) VALUES (2, "Jacquot Pierre", "Break-dance");
INSERT INTO evenements (id, name, lieu, description, horaire_debut, horaire_fin, id_Professeurs, photo, desc_photo) VALUES (1,'Saint Nicolas', 'Saint dié des vosges', "Le saint patron des Lorrains défilera dans les rues de la ville pour le plus grand plaisir des enfants.",'2023-12-03 17:30:00', '2023-12-03 19:30:00', 1, "https://i0.wp.com/saintdieinfo.fr/wp-content/uploads/2021/12/D%C3%A9fil%C3%A9_Saint-Nicolas-1.jpg?resize=636%2C479&ssl=1", "Photo du char des ldance lors de la parade");

INSERT INTO evenements (id, name, lieu, description, horaire_debut, horaire_fin, id_Professeurs, photo, desc_photo) VALUES (2,"Spectacle fin d'année", 'Saint dié des vosges', " l’association L’Dance organise son spectacle de fin d’année les 28 et 29 mai à l’Espace Georges-Sadoul.",'2023-05-28 20:30:00', '2023-05-29 21:30:00', 1, "https://cdn-s-www.vosgesmatin.fr/images/A5D9F566-73CA-4142-BCB4-BCB5D4AB08EB/NW_detail/title-1653396464.jpg", "Photo de la section adulte lors du spectacle");