//use middleware asyncHandler because if we use async we must use try catch to throw error
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc create new contacts
//@route post /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("request body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
  res.status(201).json({ message: "Create  contacts" });
});

//@desc Get  contacts
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

//@desc update contacts
//@route put /api/contacts
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedContact);
});

//@desc delete  contacts
//@route delete /api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    s;
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findOneAndDelete();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
