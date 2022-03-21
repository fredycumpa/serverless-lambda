const AWS  = require('aws-sdk');

class ProductRepository {

  constructor(
    docClient = createDynamoDBClient(),
    productTable = process.env.PRODUCTS_TABLE) {
      this.docClient = docClient;
      this.productTable = productTable;
  }
  
  async getAllProducts() {
    const result = await this.docClient.scan({
      TableName: this.productTable
    }).promise()

    return result.Items;
  }

  async createProduct(product){
    await this.docClient.put({
      TableName: this.productTable,
      Item: product
    }).promise()

    return product
  }
  
  async updateProduct(partialProduct){
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
    
    return updated.Attributes;
  }
  
  async deleteProductById(id) {
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
module.exports = ProductRepository;