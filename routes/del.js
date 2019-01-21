const express = require("express");
const router= express.Router();
const todo = require('../Schema/todo')


router.delete('/',(req,res)=>
{

    todo.deleteOne({_id : req.body.id})
    .then(r=>res.send("data delete"))
    .catch((re)=> res.send("Internally Error"))
})


module.exports=router;