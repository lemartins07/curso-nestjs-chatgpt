import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request as Req } from 'express';
import { CreateCategoryDto } from './create.category.dto';

interface AuthenticatedRequest extends Req {
  user: { sub: number };
}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req: AuthenticatedRequest) {
    return this.categoriesService.findAll(req.user.sub);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Request() req: AuthenticatedRequest, @Param() id: number) {
    return this.categoriesService.findOne(req.user.sub, id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Request() req: AuthenticatedRequest,
    @Body() data: CreateCategoryDto,
  ) {
    return this.categoriesService.create(req.user.sub, data);
  }
}
