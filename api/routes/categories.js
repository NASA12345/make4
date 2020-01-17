const express = require('express');
const router = express.Router();
const dataService = require('./../../dataService.js');

// Getting all the products under a category based on category's ID
router.get('/:ctyId', (req, res, next) => {
  const { ctyId } = req.params;
  const productsforparticularCategory = Object.fromEntries(
    Array.from(dataService.getCombinedProductMap()).filter(([productId,
      product]) => product.categoryId === ctyId) || []);
  res.status(200).json(productsforparticularCategory);
  // If id entered is Invalid ID otherwise result.
  if (!productsforparticularCategory) {
    return res.send('Invalid category ID');
  }
  res.json(productsforparticularCategory);
});

module.exports = router;
// The whole project has a server 3000 port named in server.js file.
