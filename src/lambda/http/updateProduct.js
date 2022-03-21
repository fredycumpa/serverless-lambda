const ProductService = require('../../services/ProductService.js');

export const handler = async (event) => {
  const id = event.pathParameters.id

  const productService = new ProductService()
  const product = { ...JSON.parse(event.body), id }

  const productUpdated = await productService.updateProduct(product)

  return {
    statusCode: 200,
    body: JSON.stringify({
      item: productUpdated
    })
  }
}