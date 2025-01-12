const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = (req, res , next) => {
  
    const Token = req.headers['authentication'];
    console.log(Token);
    
    if (!Token) {
      return res
        .status(403)
        .json({ message: "Token is not available", success: false });
    }

    try {
      const decode = jwt.verify(Token, process.env.SECRET_KEY);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "unauthorized , jwt token is require" });
    }
};

module.exports={Authentication}