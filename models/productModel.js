const mongoose=require("mongoose");
//SCHEMA OF DATABASE
const productSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"Product name Mandatory"],
  },
  description:{
    type:String,
    required:[true,"Product Description"],
  },price:{
    type:String,
    required:[true,"Product Price"],
  },
  vname:{
    type:String,
    required:true,
  },
  sku:{
    type:String,
    required:true,
  },
  additionalCost:{
    type:Number,
    default:0
  },
  stockCount:{
    type:Number,
    default:0
  }
},
{
  timestamps:true,
}
);

module.exports=mongoose.model("Product",productSchema);