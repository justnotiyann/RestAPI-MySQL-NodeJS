const router = require("express").Router();
const Users = require("../models/Users");
const { getUsers, addUser } = require("../controllers/Users");

router.get("/", getUsers);

router.post("/add", addUser);

module.exports = router;
