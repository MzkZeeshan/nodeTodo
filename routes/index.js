const express = require('express');
const router=express.Router();
const add = require('./add.js')
const del = require('./del.js')
const upd= require("./upd.js")

router.use('/add', add);
router.use('/update',upd);
router.use('/delete',del);
router.use('/get',require('./get.js'));


module.exports=router;