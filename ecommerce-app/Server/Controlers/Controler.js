let mongoose = require('mongoose');
 let Product = require('../Module/Productmodule');

//  Get All Product Data;

  const ProductItem = async(req,res)=>{
    const {title,ProductCategory,ProductName, ProductPrice,ProductStock} = req.body
    console.log(req.body);
     
       try{
            const productItem = await Product.create({title,ProductCategory,ProductName, ProductPrice,ProductStock});
            res.status(200).json({mesg:"Successfully create", productItem});
       }catch(error){
            console.log("Product not create",error);
            res.status(400).json({mesg:error.message});
       }
  }

  module.exports = {ProductItem}