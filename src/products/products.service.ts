import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  // Simula um banco de dados em memória
  private products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.findAll().find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }
    return product;
  }

  create(product: { id: number; name: string }) {
    this.products.push(product);
    return product;
  }

  update(id: number, updateData: { name: string }) {
    const product = this.findOne(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    product.name = updateData.name;
    return product;
  }

  delete(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return this.products.splice(index, 1);
  }
}
