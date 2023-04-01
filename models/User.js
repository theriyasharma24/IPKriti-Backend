const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("UserSchema", UserSchema);
