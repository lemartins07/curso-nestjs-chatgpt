import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma.service';
import { ProductsRepository } from './products.repository';

@Module({
  providers: [ProductsService, ProductsRepository, PrismaService],
  controllers: [ProductsController],
})
export class ProductsModule {}
