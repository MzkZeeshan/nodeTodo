const express = require("express");
const router= express.Router();
const todo = require('../Schema/todo')


router.post('/',(req,res)=>
{

    todo.updateOne({_id : req.body.id},{data : req.body.data })
    .then(r=>res.send("data update sucess fully"))
    .catch((re)=> res.send("Internally Error"))
})


module.exports=router;