import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateProductDto } from 'src/product/product.controller';
import { ApiOkResponse } from '@nestjs/swagger';
import { Product } from 'src/product/product.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOkResponse({ type: Product, isArray: true })
  getCart() {
    return this.cartService.findAll();
  }

  @Post()
  createCart(@Body() cartBody: CreateProductDto) {
    return this.cartService.save(cartBody);
  }
}
