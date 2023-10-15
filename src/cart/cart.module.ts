import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/_database/database.module';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  imports: [DatabaseModule],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
