const express=require('express');
const router=express.Router();
const {getProducts,createProduct,getProduct,updateProduct,deleteProduct,searchProduct}=require("../controllers/productDetails");

//Search Product
router.route("/search").get(searchProduct);
//Get Post Product
router.route("/").get(getProducts).post(createProduct);
//Update Delete Product
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports=router;