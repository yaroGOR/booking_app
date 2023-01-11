const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    country:{
        type: String,
        required: false,
        unique: false
    },
    city:{
        type: String,
        required: false,
        unique: false
    },
    phone:{
        type: String,
        required: false,
        unique: false
    },
    img:{
        type: String,
        required: false,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin : {
        type: Boolean,
        default: false,
    }

},{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema)