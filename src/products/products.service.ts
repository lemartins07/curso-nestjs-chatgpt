import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './create.product.dto';
import { UpdateProductDto } from './update.products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.prisma.product.update({ where: { id }, data });
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async delete(id: number) {
    try {
      return await this.prisma.product.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
