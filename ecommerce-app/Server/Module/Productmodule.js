const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ProductCategory: {
        type: String,
        required: true,
    },
    ProductName: {
        type: String,
        required: true,
    },
    ProductPrice: {
        type: Number,
        required: true,
    },
    ProductStock: {
        type: Number,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model('Product', productSchema);
