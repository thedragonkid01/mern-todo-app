const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

class UserController {
  // @URI:      api/users/register
  // @Method:   POST
  register = asyncHandler(async (req, res) => {
    // Validation
    if (!req.body.name || !req.body.email || !req.body.password) {
      res.status(400);
      throw new Error("Please input full information");
    }
    //
    const existedUser = await User.findOne({ email: req.body.email });
    if (existedUser) {
      res.status(400);
      throw new Error("Email was taken already");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    // Add new user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    if (!user) {
      throw new Error("Unable to register user");
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: this.generateToken(user._id),
    });
  });

  // @URI:      api/users/login
  // @Method:   POST
  login = asyncHandler(async (req, res) => {
    // Validation
    if (!req.body.email || !req.body.password) {
      res.status(400);
      throw new Error("Please input email/password");
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      res.status(400);
      throw new Error("Email/Password is incorrect");
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: this.generateToken(user._id),
    });
  });

  generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "1h" });
  };
}

module.exports = new UserController();
