import { hash } from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  repeatPassword: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password.toString(), 10);
  }
}
