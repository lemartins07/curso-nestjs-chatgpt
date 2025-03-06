import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma.service';
import { ProductsRepository } from './products.repository';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    ProductsService,
    ProductsRepository,
    PrismaService,
    JwtService,
    ConfigService,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
