const AbstractManager = require("./AbstractManager");

class ProfesseursManager extends AbstractManager {
  constructor() {
    super({ table: "professeurs" });
  }

  insert(professeurs) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [professeurs.title]
    );
  }

  update(professeurs) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [professeurs.title, professeurs.id]
    );
  }
}

module.exports = ProfesseursManager;
