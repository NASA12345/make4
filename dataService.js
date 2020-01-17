// All Maps declaration
let productMap;
let categoryMap;
let combinedProductMap;

// It starts products functions
function getProducts() {

  if (productMap) {
    return productMap;
  };
  // Otherwise, load following Map for all the defined products
  const productsRawData = require('./src/data/products.json');
  const productMapForReturn = new Map();

  for (const food of productsRawData.products) {
    productMapForReturn.set(food.id, food);
  };

  productMap = productMapForReturn;
  return productMap;
}

// It starts function of categories
function getCategories() {

  if (categoryMap) {
    return categoryMap;
  };
  // Otherwise, load the following Map for all the categories
  const categoriesRawData = require('./src/data/categories.json');
  const categoryMapForReturn = new Map();

  categoriesRawData.categories.forEach(category => {
    categoryMapForReturn.set(category.id, category.categoryName);
  });

  categoryMap = categoryMapForReturn;
  return categoryMap;

}
// Combinig product and category
function combineProductsWithCategories() {

  const combinedMapToReturn = new Map();

  getProducts();
  getCategories();

  // Get the values of the productMap.
  const productsInMap = productMap.values();

  // When the category IDs match, shows result
  for (const product of productsInMap) {
    product.categoryName = categoryMap.get(product.categoryId);
    let id = product.id;
    delete (product.id);
    combinedMapToReturn.set(id, product);
  };

  combinedProductMap = combinedMapToReturn;

}
// Create a product map if it is null and empty
function getCombinedProductMap() {
  if (!(combinedProductMap && combinedProductMap.size)) {
    combineProductsWithCategories();
  }
  return combinedProductMap;
}

// Enable app.js file to access functions.
module.exports = {
  getProducts,
  getCategories,
  getCombinedProductMap,
};
