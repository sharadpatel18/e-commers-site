const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Model/AuthModel");
require("dotenv").config();

const Signup = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        const existedUser = await User.findOne({ email: email });
        if (existedUser) {
            return res.status(401)
                        .json({ message: "user is already existed", success: false });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            isAdmin: isAdmin,
        });

        return res.status(201)
                    .json({ message: "user is created successfully", success: true });
    } catch (error) {
        return res.status(500)
                    .json({ message: "internal server error", success: false });
    }
};


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existedUser = await User.findOne({ email: email });
        if (!existedUser) {
            return res.status("401")
                        .json({ message: "user is not existed", success: false });
        }

        const payload = {
            id: existedUser._id,
            name: existedUser.name,
            email: existedUser.email,
            isAdmin: existedUser.isAdmin
        }

        const Token = jwt.sign(payload, process.env.SECRET_KEY);

        return res.status(201)
                    .json({ message: "user is Loggin successfully", Token: Token, success: true });
    } catch (error) {
        return res.status(500)
                    .json({ message: "internal server error", success: false });
    }
}

module.exports = {Signup , Login}