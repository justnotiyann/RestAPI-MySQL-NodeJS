const router = require("express").Router();
const Product = require("../models/Product");

// CREATE
router.post("/add", async (req, res) => {
  try {
    const { nama_product, kategori, distributor, harga } = req.body;
    const result = await Product.create({
      nama_product: nama_product,
      kategori: kategori,
      distributor: distributor,
      harga: harga,
    });
    if (!result) return res.json({ msg: "Gagal membuat data" });
    res.json({
      pesan: "Berhasil membuat data",
      msg: result,
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const result = await Product.findAll({});
    if (!result) return res.json({ msg: "Gagal mendapatkan data" });
    res.json({ msg: result });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.destroy({ where: { id: id } });
    if (!result) req.json({ msg: "Gagal menghapus data" });
    res.json({ msg: `Data dengan id : ${id} berhasil dihapus !` });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// UPDATE
router.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_product, kategori, distributor, harga } = req.body;
    const result = await Product.update(
      {
        nama_product: nama_product,
        kategori: kategori,
        distributor: distributor,
        harga: harga,
      },
      {
        where: { id: id },
      }
    );
    if (!result) return res.json({ msg: "Data gagal diupdate" });
    res.json({ msg: `Data ${id} berhasil di update !` });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
