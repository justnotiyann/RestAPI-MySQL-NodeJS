const router = require("express").Router();
const Users = require("../models/Users");
const { getUsers, addUser, deleteUser, editUser } = require("../controllers/Users");

// CREATE READ UPDATE DELETE

router.get("/", getUsers); // READ
router.post("/add", addUser); // CREATE
router.delete('/delete/:id',deleteUser) // DELETE
router.post('/edit/:id', editUser) // UPDATE

module.exports = router;
