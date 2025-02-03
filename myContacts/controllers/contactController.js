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
  res.send("create contacts");
});

const getContact = asyncHandler((req, res) => {
  res.send(`Update Contact for ID: ${req.params.id}`);
});

const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
