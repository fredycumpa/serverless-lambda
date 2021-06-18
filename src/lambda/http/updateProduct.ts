import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import ProductService from '../../services/ProductService'
import { Product } from '../../models/Product'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters.id

  const productService = new ProductService()
  const product: Partial<Product> = { ...JSON.parse(event.body), id }

  const productUpdated = await productService.updateProduct(product)

  return {
    statusCode: 200,
    body: JSON.stringify({
      item: productUpdated
    })
  }
}