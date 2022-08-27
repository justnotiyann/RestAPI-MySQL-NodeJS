const router = require("express").Router();
const Product = require("../models/Product");
const {getDatas,addProduct,editProduct,deleteProduct} = require('../controllers/Products')

router.get('/',getDatas)
router.post('/add',addProduct)
router.put('/edit/:id',editProduct)
router.delete('/delete/:id',deleteProduct)


module.exports = router;
