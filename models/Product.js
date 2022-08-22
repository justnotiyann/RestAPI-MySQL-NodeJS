const db = require("../config/db");
const DataTypes = require("sequelize");

const Products = db.define(
  "products",
  {
    nama_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distributor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    updatedAt: false,
  }
);

try {
  const data = Products.sync({});
  if (!data) return console.log("Gagal membuat table database");
  console.log("Berhasil membuat table database");
} catch (error) {
  console.log(error.message);
}

module.exports = Products;
