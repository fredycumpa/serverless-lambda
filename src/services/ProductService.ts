import * as uuid from 'uuid'

import ProductRepository from '../repositories/ProductRepository'
import { Product } from '../models/Product'


export default class ProductService {

  productRepository: ProductRepository;

  constructor(productRepository: ProductRepository = new ProductRepository()) {
    this.productRepository = productRepository
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts()
  }

  async createProduct(name: string): Promise<Product> {
    const id = uuid.v4()

    return await this.productRepository.createProduct({
      id,
      name,
      status: false,
      createdAt: new Date().toISOString()
    })
  }

  async updateProduct(partialProduct: Partial<Product>) {
    return await this.productRepository.updateProduct(partialProduct)
  }

  async deleteProductById(id: string) {
    return await this.productRepository.deleteProductById(id)
  }
}