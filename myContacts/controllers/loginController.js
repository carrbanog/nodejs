const asyncHandler = require("express-async-handler");

const getLogin = ((req, res) => {
  res.render("home.ejs")
})

module.exports = getLogin