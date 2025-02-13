const express = require("express");
const dbConnect = require("./config/dbConnect")
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"))
// app.set("views", path.join(__dirname, "views"));

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello Node");
  console.log(dbConnect)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
  console.log("서버 실행 중");
});
