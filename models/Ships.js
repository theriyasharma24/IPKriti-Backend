const mongoose = require("mongoose");
const ShipsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    email: {
      type: String,
    },
    contact: {
      type: Number,
    },
    address: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("ships", ShipsSchema);
