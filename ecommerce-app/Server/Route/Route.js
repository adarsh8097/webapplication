// const express = require('express');
// const Product = require('../Module/Productmodule')
// let router = express.Router();
// let {ProductItem} = require('../Module/Productmodule');

// // Get All Product;
//  router.post('/',async(req,res)=>{
//     const {title,ProductCategory,ProductName, ProductPrice,ProductStock} = req.body
//     console.log(req.body);
     
//        try{
//             const productItem = await Product.create({title,ProductCategory,ProductName, ProductPrice,ProductStock});
//             res.status(200).json({mesg:"Successfully create", productItem});
//        }catch(error){
//             console.log("Product not create",error);
//             res.status(400).json({mesg:error.message});
//        }
//   });

//   router.get('/filter', async (req, res) => {
//      const { category, minPrice, maxPrice } = req.query;
//      const filters = {};
//      if (category) filters.category = category;
//      if (minPrice) filters.price = { $gte: minPrice };
//      if (maxPrice) {
//          if (filters.price) filters.price.$lte = maxPrice;
//          else filters.price = { $lte: maxPrice };
//      }
//      const products = await Product.find(filters);
//      res.json(products);
//  });
 
//  module.exports = router;


// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../Module/Productmodule');

// Add Product:
 router.post('/addProduct',async(req,res)=>{
    const {title,ProductCategory,ProductName, ProductPrice,ProductStock} = req.body
    console.log(req.body);
     
       try{
            const productItem = await Product.create({title,ProductCategory,ProductName, ProductPrice,ProductStock});
            res.status(200).json({mesg:"Successfully create", productItem});
       }catch(error){
            console.log("Product not create",error);
            res.status(400).json({mesg:error.message});
       }
  });

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Filter products by category and price range
router.get('/filter', async (req, res) => {
    const { category, minPrice, maxPrice } = req.query;
    const filters = {};
    if (category) filters.category = category;
    if (minPrice) filters.price = { $gte: minPrice };
    if (maxPrice) {
        if (filters.price) filters.price.$lte = maxPrice;
        else filters.price = { $lte: maxPrice };
    }
    const products = await Product.find(filters);
    res.json(products);
});

module.exports = router;
