import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/_database/database.module';
import { CustomerService } from './customers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
