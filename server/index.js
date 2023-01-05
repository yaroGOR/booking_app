const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth.js") 
const hotelsRouter = require("./routes/hotels.js") 
const roomsRouter = require("./routes/rooms.js") 
const usersRouter = require("./routes/users.js") 


const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(console.log("connected to db"));
    
  } catch (error) {
    throw error;
  }
};

//MIDDLEWARES 
app.use(express.json())

app.use("/auth", authRouter)
app.use("/hotels", hotelsRouter)
app.use("/rooms", roomsRouter)
app.use("/users", usersRouter)

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






app.listen(8800, () => {
    connect()
  console.log("connected to backend");
});
