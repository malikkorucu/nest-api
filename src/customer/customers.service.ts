import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerCreateDTO } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<Customer>,
  ) {}

  public async insertCustomer(customer: CustomerCreateDTO) {
    await this.customerRepository.createQueryBuilder().insert().values(customer).execute();
  }

  public async getAllCustomers() {
    return await this.customerRepository.find({});
  }
}
