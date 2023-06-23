const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    ship_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ships",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    artworks: [
      {
        artwork: { type: mongoose.Schema.Types.ObjectId, ref: "artworks" },
      },
    ],
    delivery_status: {
      type: String,
      required: true,
      default: "Order Placed",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("orders", OrderSchema);
