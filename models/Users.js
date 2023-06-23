const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UsersSchema);
