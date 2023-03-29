const mongoose = require("mongoose");
//const { string } = require("prop-types");
const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    uemail: {
      type: String,
    },
    ucontactNo: {
        type: Number,
    },
    uAddress: {
        type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", UsersSchema);
