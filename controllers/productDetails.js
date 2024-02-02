const asyncHandler=require("express-async-handler");
const Product=require("../models/productModel");
//GET PRODUCT
const getProducts=asyncHandler(async(req,res)=>{
  const products=await Product.find();
  res.status(200).json(products);
});
//CREATE PRODUCT
const createProduct=asyncHandler(async(req,res)=>{
  console.log("The request is",req.body);
  const {name,description,price,vname,sku,additionalCost,stockCount}=req.body;
  if(!name||!description||!price||!vname||!sku||!additionalCost||!stockCount){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const product=await Product.create({
    name,description,price,vname,sku,additionalCost,stockCount
  });
  res.status(201).json(product);
});
//GET ID PRODUCT
const getProduct=asyncHandler(async(req,res)=>{
  const product=await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product not Found");
  }
  res.status(200).json(product);
});
//UPDATE PRODUCT
const updateProduct=asyncHandler(async(req,res)=>{
  const product=await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product not Found");
  }
  const updatedProduct=await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.status(200).json(updatedProduct);
});
//DELETE PRODUCT
const deleteProduct=asyncHandler(async(req,res)=>{
  const product=await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product not Found");
  }
  await Product.deleteOne({_id:req.params.id});
  res.status(200).json(product);
});
//SEARCH PRODUCT
const searchProduct=asyncHandler(async(req,res)=>{
  console.log(req.query);
  const {name,description,price}=req.query;

  const queryParam = [];
  for (const property in req.query){
    queryParam.push({
      [property] : { $regex: req.query[property], $options: 'i' }
    })
  }

  let products;
  if(queryParam?.length > 0) {
    products = await Product.find({
      $or: queryParam,
    });
  }

  res.json({msg:"",data: products});
});

module.exports={getProducts,createProduct,getProduct,updateProduct,deleteProduct,searchProduct};