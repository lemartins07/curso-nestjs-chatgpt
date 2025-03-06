import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateCategoryDto } from './update.category.dto';
import { CreateCategoryDto } from './create.category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: number) {
    return this.prisma.category.findMany({ where: { userId } });
  }

  async findOne(userId: number, id: number) {
    return this.prisma.category.findFirst({ where: { userId, id } });
  }

  async create(userId: number, data: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async update(userId: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { userId, id: data.id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
