const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async() => {
  try{
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB Connected");
  }catch{
    console.log("Connection Failed", err);
  }
}

module.exports = dbConnect