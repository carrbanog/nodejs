const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello node test file");
  console.log(dbConnect)
})

app.use(express.json())

app.use("/contacts", require("./routes/contactRoutes"))

app.listen(3001, () => {
  console.log("서버 실행중")
})