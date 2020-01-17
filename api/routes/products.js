const express = require('express');
const router = express.Router();
const categoryData = require('./../../src/data/categories.json');
const productData = require('./../../src/data/products.json');
const all_categories = categoryData.categories;
const master_products = productData.products.map(p => ({...p, categoryName: all_categories.find(c => c.id === p.categoryId).categoryName || ''}));

router.get('/all', (req, res, next)=>{
  // step 4 In this it shows all the products.
     res.status(200).json({
        products : master_products
    })
})

router.get('/:id', (req, res, next)=>{
  // step 5 In this it shows product according to thier Id.
    const { id } = req.params
    const product = master_products.find(p => p.id === id) || {}
     res.status(200).json({ product })
});
// The whole project has a server 3000 port named in server.js file.
    module.exports = router;
