const Products = require('../models/Product')

const getDatas = async(req,res) =>{
  try {
    const result = await Products.findAll({})
    if(!result) res.send(500).json({msg:'server error'})
    res.json({msg:result})
  } catch (e) {
    res.json({msg:e})
  }
}

const addProduct = async(req,res)=>{
  try {
    const { nama_product, kategori, distributor, harga } = req.body;
    const result = await Products.create({
      nama_product:nama_product,
      kategori:kategori,
      distributor:distributor,
      harga:harga,
    })
    if(!result) res.send(500).json({msg:'Server error'})
    res.json({msg:'Data berhasil ditambahkan'})
  } catch (e) {
    res.json({msg:e})
  }
}

const editProduct = async(req,res) =>{
  try {
    const id = req.params.id
    const { nama_product, kategori, distributor, harga } = req.body;
    const result = await Products.update({
      nama_product:nama_product,
      kategori:kategori,
      distributor:distributor,
      harga:harga,
    },{
      where:{id:id}
    })
    if(!result) res.send(500).json({msg:"server error"})
    res.json({msg:'Data berhasil diupdate'})
  } catch (e) {
    res.json({msg:e})
  }
}

const deleteProduct = async(req,res) =>{
  try {
    const id = req.params.id
    const result = await Products.destroy({where:{id:id}})
    if(!result) res.send(500).json({msg:'Server erorr'})
    res.json({msg:'Data berhasil dihapus'})
  } catch (e) {
    res.json({msg:e})
  }
}


module.exports = {getDatas,addProduct,editProduct,deleteProduct}
