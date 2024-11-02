const express=require('express');
const mongoose=require('mongoose');
const app=express();
require("dotenv").config();
const PORT=8000;
mongoose.connect(process.env.DATABASES,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

app.listen(PORT,()=>{
    console.log(`Server running on Port : ${PORT}`);
});