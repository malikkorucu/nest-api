import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, unique: true })
  placeName: string;

  @Column({ length: 50, unique: true })
  operatorName: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  description: string;
}
