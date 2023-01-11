const express = require("express");
const { updateUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/verify", verifyToken, (req, res, next) => {
    res.send("token is verifyed")
} ) //token
router.get("/verifyuser/:id", verifyUser, (req, res, next) => {
    res.send("you are logged in user")
} ) //user
router.get("/verifyadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("you are logged in admin")
} ) //admin

//UPDATE
router.put("/:id",verifyUser, updateUser) //user

//DELETE
router.delete("/:id", deleteUser) //user

//GET
router.get("/:id", getUser) //user
//GET ALL
router.get("/", getAllUsers) //admin


module.exports = router