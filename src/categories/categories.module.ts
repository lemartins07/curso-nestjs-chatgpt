import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/prisma.service';
import { CategoriesRepository } from './categories.repository';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    PrismaService,
    CategoriesService,
    CategoriesRepository,
    JwtService,
    ConfigService,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
