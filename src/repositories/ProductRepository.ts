import * as AWS  from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { Product } from '../models/Product'

export default class ProductRepository {

  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly productTable = process.env.PRODUCTS_TABLE) {
  }
  
  async getAllProducts(): Promise<Product[]> {
    const result = await this.docClient.scan({
      TableName: this.productTable
    }).promise()

    return result.Items as Product[]
  }

  async createProduct(product: Product): Promise<Product> {
    await this.docClient.put({
      TableName: this.productTable,
      Item: product
    }).promise()

    return product
  }
  
  async updateProduct(partialProduct: Partial<Product>): Promise<Product> {
    const updated = await this.docClient.update({
      TableName: this.productTable,
      Key: { 'id': partialProduct.id },
      UpdateExpression: 'set #name = :name, status = :status',
      ExpressionAttributeNames: {
        '#name': 'name'
      },
      ExpressionAttributeValues: {
        ':name': partialProduct.name,
        ':status': partialProduct.status
      },
      ReturnValues: 'ALL_NEW'
    }).promise()
    
    return updated.Attributes as Product
  }
  
  async deleteProductById(id: string) {
    return this.docClient.delete({
      TableName: this.productTable,
      Key: { 'id': id }
    }).promise()
  }
}

function createDynamoDBClient() { 
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  }

  return new AWS.DynamoDB.DocumentClient()
}