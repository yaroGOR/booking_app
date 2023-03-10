const express = require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity, countByType, getHotelRooms } = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE

router.post("/", createHotel) //admin

//UPDATE
router.put("/:id", updateHotel) //admin

//DELETE
router.delete("/:id", deleteHotel) //admin

//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)




module.exports = router