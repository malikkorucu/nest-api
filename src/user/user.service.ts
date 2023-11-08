import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserSignInDTO, UserSignUpDTO } from './user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { sendTokenToClient } from 'src/utils/auth';
import { compare } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async signUp(signUpBody: UserSignUpDTO) {
    const res = await this.userRepository.create(signUpBody);
    await this.userRepository.save(res);
  }

  async signIn(body: UserSignInDTO) {
    const dbUser = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });

    if (!dbUser) {
      throw new HttpException('Kayıtlı e-mail bulunamadı !', HttpStatus.BAD_REQUEST);
    }

    const isRightPassword = await compare(body.password, dbUser.password);

    if (!isRightPassword) {
      throw new HttpException('Parola bilgisi yanlış !', HttpStatus.BAD_REQUEST);
    }

    return sendTokenToClient(dbUser);
  }

  async getAllUsers() {
    return await this.userRepository.find({});
  }
}
