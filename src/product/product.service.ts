import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './product.controller';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async saveProduct(createProductDto: CreateProductDto): Promise<string> {
    this.productRepository
      .createQueryBuilder()
      .insert()
      .values(createProductDto)
      .execute();

    return 'başarılı';
  }
}
