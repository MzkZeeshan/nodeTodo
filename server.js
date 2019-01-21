const express = require('express');
const app = express();
const mongoose = require('./Config/db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log("we are Connected") );



app.listen(process.env.POST || 3000,(req,res)=>console.log("server run") );


app.use(express.json());


app.use('/',require('./routes/index'))


