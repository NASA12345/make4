const express = require('express');
const router = express.Router();
const categoryData = require('./../../src/data/categories.json');
const productData = require('./../../src/data/products.json');
const all_products = productData.products;

router.get('/:ctyId', (req, res, next)=>{
  // step 6 In this it shows all the products related to categoryId .
    const { ctyId } = req.params
    const products = all_products.filter(p => p.categoryId === ctyId) || []
     res.status(200).json({ products })
});
// The whole project has a server 3000 port named in server.js file.
module.exports = router;
