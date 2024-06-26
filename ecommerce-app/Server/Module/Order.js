
let mongoose = require('mongoose');

let Schema  = mongoose.Schema;

let OrderSchema = Schema({
    products:[
        {
            productId: Schema.Types.ObjectId,
            quantity: Number,

        }
    ],
    purchaseDate: { type: Date, default: Date.now }
});

mongoose.export = mongoose.model('Order',OrderSchema);
