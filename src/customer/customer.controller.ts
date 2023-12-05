import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customers.service';
import { CustomerCreateDTO, CustomerUpdateDTO } from './customer.dto';

@Controller('customer')
@ApiTags('Customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  public async create(@Body() body: CustomerCreateDTO) {
    await this.customerService.insertCustomer(body);
  }

  @Get('/getAll')
  async getCustomers() {
    return await this.customerService.getAllCustomers();
  }

  @Get(':id')
  async getCustomer(@Param('id', new ParseIntPipe()) id: number) {
    return await this.customerService.getCustomer(id);
  }

  @Put(':id')
  async update(@Param('id', new ParseIntPipe()) id, @Body() customer: CustomerUpdateDTO) {
    return await this.customerService.updateCustomer(id, customer);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id) {
    return await this.customerService.deleteCustomer(id);
  }
}
