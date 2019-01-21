var mongoose = require('mongoose');
mongoose.connect('mongodb://mzk:zeeshan123@ds161724.mlab.com:61724/todo', {useNewUrlParser:true});

module.exports=mongoose;