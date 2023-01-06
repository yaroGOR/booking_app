import Room from "../models/Rooms";
import Hotel from "../models/Hotel";

const createError = require("../utils/error");

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRomm = new Room(req.body);

    try {
        const savedRoom = await newRoom.saved()
        try {

        } catch(err) {
            next(err)
        }
    } catch (err) {
        next(err)
    }
}