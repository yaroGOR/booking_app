const jwt = require( "jsonwebtoken")
const createError = require("./error") 


 const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(411, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(err)
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

 const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
module.exports = {verifyToken, verifyUser, verifyAdmin}