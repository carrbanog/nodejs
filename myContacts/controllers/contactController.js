//get all contacts
const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler((req, res) => {
  res.send("Contacts Page");
});

//create contact
const createContact = asyncHandler((req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  res.send("create contacts122222");
});

module.exports = {getAllContacts, createContact};
