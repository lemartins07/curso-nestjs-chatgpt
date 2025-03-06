import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './create.product.dto';
import { UpdateProductDto } from './update.products.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request as Req } from 'express';

interface AuthenticatedRequest extends Req {
  user: { sub: number };
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  @UseGuards(AuthGuard)
  @Post()
  createProduct(
    @Request() req: AuthenticatedRequest,
    @Body() data: CreateProductDto,
  ) {
    return this.productsService.create(req.user.sub, data);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    return this.productsService.update(Number(id), updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.delete(Number(id));
  }
}
