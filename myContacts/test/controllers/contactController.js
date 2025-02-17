const asyncHandler = require("express-async-handler");
// const Contact = require("../../models/contactModel");
const Contact = require("../models/contactModel")

const getAllContacts = asyncHandler(async(req, res) => {
  const contacts = await Contact.find();
  res.render("index.ejs", {contacts: contacts})
  // res.send("Contacts Page test");
});

const addContact = ((req, res) => {
  res.render("add.ejs")
})

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  const contact = await Contact.create({
    name, email, phone
  })
  // res.send("create contacts test");
  res.redirect("/contacts")
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
  addContact,
};
