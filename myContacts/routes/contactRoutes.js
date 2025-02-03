const express = require("express");
const router = express.Router();
const {getAllContacts, createContact} = require("../controllers/contactController")


router
  .route("/")
  .get(getAllContacts)
  .post(createContact)
  // .post((req, res) => {
  //   console.log(req.body);
  //   const {name, email, phone} = req.body;
  //   if(!name || !email || !phone){
  //     return res.send("필수 값이 입력되지 않았습니다.")
  //   }
  //   res.send("create contacts");
  // });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Contact for id : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
  });

  module.exports = router