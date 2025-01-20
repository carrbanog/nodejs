const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node");
});

//연락처 가져오기
app.get("/contacts", (req, res) => {
  res.send("contacts");
});

//새 연락처 추가하기
app.post("/contacts", (req, res) => {
  res.send("creact contacts");
});

//연락처 1개 가져오기
app.get("/contacts/:id", (req, res) => {
  res.send(`View Contact for ID : ${req.params.id}`);
});


//연락처 수정하기기
app.put("/contacts/:id", (req, res) => {
  res.send(`update contact  for id : ${req.params.id}`);
});

//연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
  res.send(`Delete Contact for Id : ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
