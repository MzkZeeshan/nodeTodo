const express = require("express");
const router= express.Router();

const todo = require('../Schema/todo');


router.get('/',(req,res) =>
{
    console.log("add",req.body);
    todo.find({})
    .then((r)=>res.send({message : r}))
    .catch((e)=> res.send({message :"Errro in Connection"}))





})


module.exports=router;