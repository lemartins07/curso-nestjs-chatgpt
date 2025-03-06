import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './create.category.dto';
import { UpdateCategoryDto } from './update.category.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async create(userId: number, data: CreateCategoryDto) {
    return this.categoriesRepository.create(userId, data);
  }

  async findAll(userId: number) {
    return this.categoriesRepository.findAll(userId);
  }

  async findOne(userId: number, id: number) {
    const category = await this.categoriesRepository.findOne(userId, id);
    if (!category) throw new NotFoundException('Categoria não encontrada');
    return category;
  }

  async update(userId: number, data: UpdateCategoryDto) {
    const category = await this.categoriesRepository.findOne(userId, data.id);
    if (!category) {
      throw new NotFoundException(`Categoria com ID ${data.id} não encontrado`);
    }
    return this.categoriesRepository.update(userId, data);
  }

  async delete(userId: number, id: number) {
    const category = await this.categoriesRepository.findOne(userId, id);
    if (!category) throw new NotFoundException('Categoria não encontrada');
    await this.categoriesRepository.delete(id);
    return category;
  }
}
