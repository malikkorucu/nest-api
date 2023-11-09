import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { CreateProductDto } from 'src/product/product.controller';

@Injectable()
export class CartService {
  constructor(
    @Inject('CART_REPOSITORY')
    private cartRepository: Repository<Cart>,
  ) {}

  async findAll() {
    return this.cartRepository.find();
  }

  async save(body: CreateProductDto) {
    await this.cartRepository.createQueryBuilder().insert().values(body).execute();
    return 'Test';
  }
}
