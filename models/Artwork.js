const mongoose = require("mongoose");
const ArtworkSchema = mongoose.Schema(
  {
    cost: {
      type: Number,
      required: true
    },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Artist",
      required: true
    },
    art_description: {
      type: String,
    },
     Reviews_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Reviews", 
         required: true
      },
  },
  { timestamps: true }
);
module.exports = mongoose.model("artworkSchema", ArtworkSchema);