const ProductService = require('../../services/ProductService.js');

export const handler = async (event) => {
  const id = event.pathParameters.id
  
  const productService = new ProductService()
  await productService.deleteProductById(id)

  return {
    statusCode: 200,
    body: 'delete id: ' + event.pathParameters.id
  }
}