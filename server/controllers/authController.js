const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createError = require("../utils/error");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const password = req.body.password;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Password is incorrect"));

    const token = await jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );
    console.log(token);
    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
