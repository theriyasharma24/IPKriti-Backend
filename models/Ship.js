const mongoose = require("mongoose");
const ShipSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required:true
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
module.exports = mongoose.model("ship", ShipSchema);
