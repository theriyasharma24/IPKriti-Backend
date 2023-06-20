const mongoose=require("mongoose");
const OrderSchema=mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        orders:
        [
            {
                artwork:{type:mongoose.Schema.Types.ObjectId,
                    ref:"artworks"},
                quantity:Number,
                total_cost:Number
            }
        ]
    },
    { timestamps: true }
);
module.exports=mongoose.model("orders",OrderSchema);