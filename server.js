const express=require('express');
const app=express();
app.use(express.json());
const productrequire=require('./routes/product');
app.use(productrequire);
app.listen(4000,'0.0.0.0',()=>{
    console.log('Server Started at port 4000');
})