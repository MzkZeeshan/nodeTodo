const express = require("express");
const router= express.Router();

const todo = require('../Schema/todo');


router.post('/',(req,res) =>
{
    console.log("add",req.body);
    const add = new todo({data:req.body.data})
    add.save(add)
    .then((r)=>res.send({message :"insert data Sucess fully"}))
    .catch((e)=> res.send({message :"Errro in Connection"}))





})


module.exports=router;