const express = require("express");
const { updateUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/verify", verifyToken, (req, res, next) => {
    res.send("token is verifyed")
} )
router.get("/verifyuser/:id", verifyUser, (req, res, next) => {
    res.send("you are logged in user")
} )
router.get("/verifyadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("you are logged in admin")
} )

//UPDATE
router.put("/:id",verifyUser, updateUser)

//DELETE
router.delete("/:id",verifyUser, deleteUser)

//GET
router.get("/:id",verifyUser, getUser)
//GET ALL
router.get("/",verifyAdmin, getAllUsers)


module.exports = router