import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customers.service';
import { CustomerCreateDTO } from './customer.dto';

@Controller('customer')
@ApiTags('Customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('')
  public async create(@Body() body: CustomerCreateDTO) {
    await this.customerService.insertCustomer(body);
  }

  @Get('/getAll')
  public async getCustomers() {
    return await this.customerService.getAllCustomers();
  }
}
