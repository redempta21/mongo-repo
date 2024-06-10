const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

name: {type: String, required: true},
price:{ type: String, required: true},
email: {
    type: String,
   required: false
},
quantity: Number
});

const item = mongoose.model('Item', itemSchema);

module.exports =   item;