const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add contact phone number"],
    },
    email: {
      type: String,
      required: [true, "please add contact phone number"],
    },
    phone: {
      type: String,
      required: [true, "please add contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);