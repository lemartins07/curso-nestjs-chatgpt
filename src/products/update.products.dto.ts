import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: 'Tablet', description: 'Nome do produto' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty({ example: '299', description: 'Preço do produto' })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  price: number;
}
