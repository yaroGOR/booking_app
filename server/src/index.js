const express = require("express");
const serverless = require("serverless-http")

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const authRouter = require("./routes/auth.js") 
const hotelsRouter = require("./routes/hotels.js") 
const roomsRouter = require("./routes/rooms.js") 
const usersRouter = require("./routes/users.js") 
const  cookieParser =require( "cookie-parser")



const app = express();



dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB"));
    
  } catch (error) {
    throw error;
  }
};
const netlify_path = "/.netlify/functions/api"

//MIDDLEWARES 
app.use(express.json())

app.use(cors())
app.use(cookieParser())

app.use(netlify_path+"/auth", authRouter)
app.use(netlify_path+"/hotels", hotelsRouter)
app.use(netlify_path+"/rooms", roomsRouter)
app.use(netlify_path+"/users", usersRouter)

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})






app.listen(process.envPORT || 8800, () => {
    connect()
  console.log("Listening to server");
});

module.exports.handler = serverless(app)