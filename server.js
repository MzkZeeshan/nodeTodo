const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./Config/db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log("we are Connected") );

app.use(cors())

app.listen(process.env.PORT || 3000,(req,res)=>console.log("server run") );



app.use(express.json());


app.use('/',require('./routes/index'))


