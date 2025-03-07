import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Celular', description: 'Nome do produto' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1999.99, description: 'Preço do produto' })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
