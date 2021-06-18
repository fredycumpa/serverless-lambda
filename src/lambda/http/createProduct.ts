import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import ProductService from '../../services/ProductService'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
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