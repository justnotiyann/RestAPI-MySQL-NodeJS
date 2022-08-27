const Users = require("../models/Users");

const getUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (!result) res.send(400).json({ msg: "Terjadi kesalahan" });
  res.json({ msg: result });
};

const addUser = async (req, res) => {
  const { nama, nama_product, email, nomor_telepon, password, confirm, alamat } = req.body;
  if (password !== confirm) {
    res.send(400).json({ msg: "Password tidak sama harap cek kembali" });
  } else {
    const result = await Users.create({
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      password: password,
      alamat: alamat,
    });
    if (!result) res.send(500).json({ msg: "Terjadi error" });
    res.send(200).json({ msg: result });
  }
};

module.exports = { getUsers, addUser };
