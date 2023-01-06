const express = require("express")
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();


router.post("/:hotelid", verifyAdmin, createRoom)

//UPDATE
router.put("/:id", verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getAllRooms)

module.exports = router