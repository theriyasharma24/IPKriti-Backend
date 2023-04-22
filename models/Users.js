const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UsersSchema);
