const router = require("express").Router();
const Users = require("../models/Users");
const Images = require('../models/Images')
const upload = require('../controllers/Multer')
const { getUsers, addUser, deleteUser, editUser,addImage } = require("../controllers/Users");

// CREATE READ UPDATE DELETE

router.get("/", getUsers); // READ
router.post("/add", addUser); // CREATE
router.delete('/delete/:id',deleteUser) // DELETE
router.post('/edit/:id', editUser) // UPDATE

// Images
router.get('/image/:id',async(req,res)=>{
  const id = req.params.id
  const result = await Images.findAll({where:{id:id}})
  res.send(result.buffer)
})
router.post('/image',upload.single('avatar'),async(req,res)=>{
  const filename = req.file.filename
  const path = req.file.path
  const buffer = req.file.mimetype

  const result = await Images.create({
    filename:filename,
    path:path,
    buffer:buffer
  })
  res.json({msg:'Berhasil insert image'})
})



module.exports = router;
