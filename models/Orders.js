const mongoose=require("mongoose");
const OrderSchema=mongoose.Schema(
    {
        ships_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ship",
            required: true,
        },
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        artworks:
        [
            {
                artwork:{type:mongoose.Schema.Types.ObjectId,
                    ref:"artworks"},
                quantity:Number,
                total_cost:Number
            }
        ],
        deliveryStatus:
        {
            type:String,
            required:true,
            default:"Order Placed"
        }
    },
    { timestamps: true }
);
module.exports=mongoose.model("orders",OrderSchema);