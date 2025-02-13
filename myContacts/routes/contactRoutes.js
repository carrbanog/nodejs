const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  updateOne,
  addContact
} = require("../controllers/contactController");

router.route("/").get(getAllContacts);
// .post((req, res) => {
//   console.log(req.body);
//   const {name, email, phone} = req.body;
//   if(!name || !email || !phone){
//     return res.send("필수 값이 입력되지 않았습니다.")
//   }
//   res.send("create contacts");
// });
router.route("/update/:id").put(updateOne)
router.route("/add").get(addContact).post(createContact);
router
  .route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
