import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './create.product.dto';
import { UpdateProductDto } from './update.products.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAll() {
    return await this.productsRepository.findAll();
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async create(userId: number, data: CreateProductDto) {
    return this.productsRepository.create(userId, data);
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.productsRepository.update(id, data);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async delete(id: number) {
    await this.findOne(id);
    return await this.productsRepository.delete(id);
  }
}
