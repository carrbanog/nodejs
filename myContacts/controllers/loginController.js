const asyncHandler = require("express-async-handler");

const getLogin = ((req, res) => {
  res.render("home.ejs")
})


//login userr
//post
const loginUser = asyncHandler(async(req, res) => {
  const {username, password} = req.body;
  if(username === "admin" && password === "1234"){
    // console.log(username, password);
    res.send("login success");
  }else{
    res.send("login failed");
    // console.log(username, password);
  }
})

module.exports = {getLogin, loginUser}