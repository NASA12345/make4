const express = require('express');
const router = express.Router();
const dataService = require('./../../dataService.js');

// It will combine all products
router.get('/all', (req, res, next) => {
  res.status(200);
  res.json(Object.fromEntries(dataService.getCombinedProductMap()),
  );
});

// It will show specific product
router.get('/:id', (req, res) => {
  const productData = dataService.getProducts();
  const productById = productData.get(req.params.id);
  // If id enter is Invalid otherwise result.
  if (!productById) {
    return res.send('Invalid product ID');
  }
  res.json(productById);
});

module.exports = router;
// The whole project has a server 3000 port named in server.js file.
