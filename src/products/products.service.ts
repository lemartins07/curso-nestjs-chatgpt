import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
  }
}
