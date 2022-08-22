const { Sequelize } = require("sequelize");

const db = new Sequelize("RESTFULL_API", "root", "", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

try {
  const sync = db.sync({});
  if (!sync) return console.log("Koneksi gagal");
  console.log("Koneksi Berhasil");
} catch (error) {
  console.log(error.message);
}

module.exports = db;
