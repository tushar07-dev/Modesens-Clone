const {Schema, model}=require("mongoose")

const modesensSchema=new Schema({
    url:String,
    name:String,
    line:Date,
    price:Number,
    stores:Number,
    type:String
})
const Kids=model("Kids",modesensSchema)
const Beauty=model("beauties",modesensSchema)
const Cart=model("carts",modesensSchema)
module.exports={Kids, Beauty, Cart};
