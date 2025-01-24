const mongoose = require("mongoose");
require("dotenv").config();

// const dbConnect = async () => {
//   try{
//     const connect = await mongoose.connect(process.env.DB_CONNECT1);
//     console.log("DB Connected");
//   } catch(err){
//     console.log(err);
//   }
// }

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT1, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.error("Connection Failed:", err);
  }
};

module.exports = dbConnect;
