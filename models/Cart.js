const mongoose = require("mongoose");
const CartSchema = mongoose.Schema(
  {
    artwork_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artworks",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    quantity: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("cart", CartSchema);
