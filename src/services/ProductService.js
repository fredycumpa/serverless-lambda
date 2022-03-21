const uuid = require('uuid');
const ProductRepository = require('../repositories/ProductRepository.js');

class ProductService {

  constructor(productRepository = new ProductRepository()) {
    this.productRepository = productRepository
  }

  async getAllProducts() {
    return this.productRepository.getAllProducts()
  }

  async createProduct(name){
    const id = uuid.v4()
    return await this.productRepository.createProduct({
      id,
      name,
      status: false,
      createdAt: new Date().toISOString()
    })
  }

  async updateProduct(partialProduct) {
    return await this.productRepository.updateProduct(partialProduct)
  }

  async deleteProductById(id) {
    return await this.productRepository.deleteProductById(id)
  }
}
module.exports = ProductService;