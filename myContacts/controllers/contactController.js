//get all contacts
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  // res.send("Contacts Page");
  res.send(contacts);
});

//create contact
const createContact = asyncHandler(async (req, res) => {
  // console.log(req.body);
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.send("create contacts");
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  const id = req.params.id;
  console.log(`put id: ${id}`)
  const { name, email, phone } = req.body;
  console.log(`put body ${JSON.stringify(req.body)}`)
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new Error("Contact not found");
  }
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  contact.save();
  res.json(contact);
});
const deleteContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new Error("Contact not found");
  }
  await Contact.deleteOne();
  res.send("Deleted");
});

const updateOne = asyncHandler(async(req, res) => {
  const id = req.params.id
  const { name, email, phone } = req.body;
  console.log(req.body.name);
  const contact = await Contact.updateOne({name: "Park"}, {phone: "55555"});
})

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  updateOne
};
