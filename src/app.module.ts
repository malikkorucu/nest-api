import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { DatabaseModule } from 'src/_database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { APP_FILTER } from '@nestjs/core';
import { DbExceptionFilter } from './middleware/DbExceptionFilter';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule, CartModule, ConfigModule.forRoot(), CustomerModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: DbExceptionFilter,
    },
  ],
})
export class AppModule {}
