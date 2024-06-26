const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = Schema({

     products:[{
        productsId: Schema.Types.ObjectId,
        quantity:Number,
       }]
    
});

mongoose.export = mongoose.model('Cart', CartSchema);