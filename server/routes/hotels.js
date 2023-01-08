const express = require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity, countByType, getHotelRooms } = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE

router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)




module.exports = router