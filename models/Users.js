const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Users = db.define("users", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomor_telepon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  const data = Users.sync({});
  if (!data) return console.log("Gagal membuat table database");
  console.log("Berhasil membuat table database");
} catch (error) {
  console.log(error.message);
}

module.exports = Users;
