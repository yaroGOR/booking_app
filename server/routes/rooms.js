const express = require("express")
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms, updateRoomAviability } = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();


router.post("/:hotelid", createRoom) //admin

//UPDATE
router.put("/:id", updateRoom) //admin
router.put("/aviability/:id", updateRoomAviability)

//DELETE
router.delete("/:id/:hotelid", deleteRoom) //admin

//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getAllRooms)

module.exports = router