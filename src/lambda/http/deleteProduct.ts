import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import ProductService from '../../services/ProductService'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters.id
  
  const productService = new ProductService()
  await productService.deleteProductById(id)

  return {
    statusCode: 200,
    body: 'delete id: ' + event.pathParameters.id
  }
}