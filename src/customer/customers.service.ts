import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerCreateDTO, CustomerUpdateDTO } from './customer.dto';

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

  public async updateCustomer(id: number, customer: CustomerUpdateDTO) {
    await this.customerRepository.createQueryBuilder().update(Customer).set(customer).where('id = :id', { id }).execute();
    return await this.customerRepository.findOne({ where: { id } });
  }

  public async deleteCustomer(id: number) {
    await this.customerRepository.delete(id);
  }
}
