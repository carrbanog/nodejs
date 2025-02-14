const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, //중복x
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("User", UserSchema);
//db에 users 로 저장