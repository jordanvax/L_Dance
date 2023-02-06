const AbstractManager = require("./AbstractManager");

class EvenementsManager extends AbstractManager {
  constructor() {
    super({ table: "evenements" });
  }

  insert(evenements) {
    return this.connection.query(
      `insert into ${this.table} (name, lieu, description, horaire_debut, horaire_fin, id_Professeurs, photo, desc_photo) values (?,?,?,?,?,?,?,?)`,
      [
        evenements.name,
        evenements.lieu,
        evenements.description,
        evenements.horaire_debut,
        evenements.horaire_fin,
        evenements.id_Professeurs,
        evenements.photo,
        evenements.desc_photo,
      ]
    );
  }

  update(evenements) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      evenements,
      evenements.id,
    ]);
  }
}

module.exports = EvenementsManager;
