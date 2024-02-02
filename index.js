const express=require('express');
const connectDb=require("./config/dbConnection");
const errorhandler=require("./middleware/errorhandler");
const dotenv=require("dotenv").config();
connectDb();
const app=express();
const port=process.env.PORT||5000;
app.use(express.json());
app.use("/api/products/",require("./routes/product"));
app.use(errorhandler);
//port listen function
app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});