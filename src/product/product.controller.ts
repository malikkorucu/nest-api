import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Entity } from 'typeorm';
import { IsString } from 'class-validator';
import { ApiBody, ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity()
export class CreateProductDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;
}

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOkResponse({ type: Product, isArray: true })
  getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateProductDto })
  async saveProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.saveProduct(createProductDto);
  }
}
