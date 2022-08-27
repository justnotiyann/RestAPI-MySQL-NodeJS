const Users = require("../models/Users");
const upload = require('../controllers/Multer')


const getUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (!result) res.send(400).json({ msg: "Terjadi kesalahan" });
  res.json({ msg: result });
};

const addUser = async (req, res) => {
  const { nama, email, nomor_telepon, password, confirm, alamat } = req.body;
  if (password !== confirm) {
    res.json({ msg: "Password tidak sama harap cek kembali" });
  } else {
    const result = await Users.create({
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      password: password,
      alamat: alamat,
    });
    if (!result) res.send(500).json({ msg: "Terjadi error" });
    res.json({
      res:'Berhasil insert data',
      msg: [result]
     });
  }
};

const deleteUser = async (req, res) => {
    const id = req.params.id
    const result = await Users.destroy({where:{id:id}})
    if(!result) res.send(500).json({msg:'erorr'})
    res.json({msg:'Data berhasil dihapus'})
}

const editUser = async(req,res)=>{
  const id = req.params.id
  const { nama, nama_product, email, nomor_telepon, password, confirm, alamat } = req.body;
  if (password !== confirm) {
    res.json({ msg: "Password tidak sama harap cek kembali" });
  } else {
    const result = await Users.update({
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      password: password,
      alamat: alamat,
    },{
      where:{id:id}
    });

    if (!result) res.json({ msg: "Terjadi error" });
    res.json({
      res:'Berhasil update data',
     });
  }
}


const addImage = async(req,res) =>{
  res.json('oke')
}




module.exports = { getUsers, addUser,deleteUser,editUser,addImage };
