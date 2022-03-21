const ProductService = require('../../services/ProductService.js');

export const handler = async (_event) => {
  const productService = new ProductService()
  const items = await productService.getAllProducts();

  return {
    statusCode: 201,
    body: JSON.stringify({
      items
    })
  };
}