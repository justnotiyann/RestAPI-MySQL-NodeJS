const db = require("../config/db");
const DataTypes = require("sequelize");

const image = db.define('image',{
  filename: {
    type: DataTypes.STRING,
  },
  path: {
    type: DataTypes.STRING,
  },
  buffer: {
    type: DataTypes.BLOB,
  },
})


try {
  const data = image.sync({});
  if (!data) return console.log("Gagal membuat table database");
  console.log("Berhasil membuat table database");
} catch (error) {
  console.log(error.message);
}

module.exports = image
