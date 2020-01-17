const express = require('express');
const app = express();
const productsRoute = require('./api/routes/products');
const productRoute = require('./api/routes/products');
const categoryRoute = require('./api/routes/categories');

// These there are the starting route which are further written in other files.
app.use('/products', productsRoute);
app.use('/product', productRoute);
app.use('/category', categoryRoute)

module.exports = app;
