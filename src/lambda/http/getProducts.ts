import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import ProductService from '../../services/ProductService'

export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const productService = new ProductService()
  const items = await productService.getAllProducts();

  return {
    statusCode: 201,
    body: JSON.stringify({
      items
    })
  };
}