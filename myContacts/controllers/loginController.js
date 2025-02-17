const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const getLogin = (req, res) => {
  res.render("home.ejs");
};

//login userr
//post
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // if (username === "admin" && password === "1234") {
  //   // console.log(username, password);
  //   res.send("login success");
  // } else {
  //   res.send("login failed");
  //   // console.log(username, password);
  // }
  const user = await User.findOne({username});
  if(!user){
    return res.json({message: "일치하는 사용자가 없습니다."});
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    return res.json({message: "비밀번호가 맞지 않습니다."});
  }

  const token = jwt.sign({id: user._id}, jwtSecret);
  res.cookie("token", token,  {httpOnly: true});
  console.log(user, isMatch, token);
  res.redirect("/contacts");
});

// Register page
//get
const getRegister = (req, res) => {
  res.render("register");
};

//register user
//post
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (password === password2) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json({ message: "Register successful", user });
  } else {
    res.send("failed");
  }
});
module.exports = { getLogin, loginUser, getRegister, registerUser };
