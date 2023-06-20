const mongoose = require("mongoose");
const ArtistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // artistType:[
    //   {
    //     type:String //ex-watercolorartist,illustrator
    //   }
    // ]
    // ,
    contact: {
      type: Number,
    },
    about: {
      type: String,
    },
    address: {
      type: String,
    },
    // socialMediaHandles:{
    //   type:Map,
    //   of:String     //works like a dictionary in python
    // },
    // UPIlink:{
    //   type:String,
    //   required:true
    // }
  },
  { timestamps: true }
);
module.exports = mongoose.model("artists", ArtistSchema);
