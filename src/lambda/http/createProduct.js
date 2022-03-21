const ProductService = require('../../services/ProductService.js');

export const handler = async (event) => {
  const { name } = JSON.parse(event.body)

  const productService = new ProductService()
  const product = await productService.createProduct(name)

  return {
    statusCode: 201,
    body: JSON.stringify({
      item: product
    })
  };
}