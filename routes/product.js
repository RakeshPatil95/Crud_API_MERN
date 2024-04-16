const express = require('express');

const db=require('../db');
const router=express.Router(); 
router.get('/product/read',(req,res)=>{
    const statement=`select * from products;`
    const connnection=db.connect();
    connnection.query(statement,(err,suc)=>{
       connnection.end();
       if(err)
       res.send(err);
       else
       res.send(suc);
    })
})
router.post('/product/add',(req,res)=>{
    const{name,price}=req.body;
    const statement=`insert into products(name,price) values('${name}',${price});`
    const connnection=db.connect();
    connnection.query(statement,(err,suc)=>{
        connnection.end;
        if(err)
        res.send(err);
        else
        res.send('Product Added . . .');
    })

})
router.delete('/product/delete',(req,res)=>{
    const{}
})
module.exports=router;