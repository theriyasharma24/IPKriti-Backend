const mongoose = require("mongoose");
const ArtistsSchema=mongoose.Schema(
    {
        name:{
            type:String
        }    
    },
  { timestamps: true }
)
module.exports = mongoose.model("Artists", ArtistsSchema);