const express = require("express");
const dbConnect = require("./config/dbConnect")
const path = require("path");
const methodOverride = require("method-override")
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static("./public"))
// app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
dbConnect();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));
app.use("/", require("./routes/loginRoutes"));

app.listen(3000, () => {
  console.log("서버 실행 중");
});
