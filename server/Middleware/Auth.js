const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = (req, res) => {
  try {
    const Token = req.headers["authentication"];

    if (!Token) {
      return res
        .status(403)
        .json({ message: "Token is not available", success: false });
    }

    try {
      const decode = jwt.verify(auth, process.env.SECRET_KEY);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "unauthorized , jwt token is require" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
};

module.exports={Authentication}