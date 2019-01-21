const mongoose = require('mongoose');


const todoData = new mongoose.Schema({
    data:String
})


const todo = mongoose.model('todo',todoData);

module.exports = todo;