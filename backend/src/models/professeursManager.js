const AbstractManager = require("./AbstractManager");

class ProfesseursManager extends AbstractManager {
  constructor() {
    super({ table: "professeurs" });
  }

  insert(professeurs) {
    return this.connection.query(
      `insert into ${this.table} (name, style) values (?,?)`,
      [professeurs.name, professeurs.style]
    );
  }

  update(professeurs) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      professeurs,
      professeurs.id,
    ]);
  }
}

module.exports = ProfesseursManager;
