import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './create.product.dto';
import { UpdateProductDto } from './update.products.dto';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
