

const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors');

 var app=express() 
  //object for return to express
 app.use(cors());

 app.use(express.json())
 const productRoutes = require('./routes/productRout');

 app.get('/user',(req,res)=>{
    res.send("hello")
 })
 app.use('/',productRoutes);



mongoose.connect
('mongodb+srv://ecommerce-h-r:ahmed&randa@cluster-h-r.lwnmhhu.mongodb.net/')
.then(()=>{
console.log("connected to db successfully"); }
)
.catch(()=>{
    console.log(" error connected to db "); }
)

 app.listen(4200,()=>{
    console.log("server listening on port 4200");
 })