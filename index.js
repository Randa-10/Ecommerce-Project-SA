

const express=require("express")
const mongoose=require("mongoose")
 var app=express()  //object for return to express

 app.use(express.json())
 const productRoutes = require('./routes/productRout');

 app.get('/user',(req,res)=>{
    res.send("hello")
 })
 app.use('/',productRoutes);



mongoose.connect(
    'mongodb://27.0.0.1:27017/Api'
    // "mongodb+srv://mustafamhmod95:bYrUCQ2Jf6z3ZU8w@amazon.fj4moo9.mongodb.net/AmazonDB"

    )
.then(()=>{
console.log("connected to db successfully"); }
)
.catch(()=>{
    console.log(" error connected to db "); }
)

 app.listen(4200,()=>{
    console.log("server listening on port 4200");
 })