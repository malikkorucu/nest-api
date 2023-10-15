import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserSignInDTO, UserSignUpDTO } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return 'burası user controlller';
  }

  @Post('/signUp')
  async signUp(@Body() signUpBody: UserSignUpDTO, @Res() res: Response) {
    await this.userService.signUp(signUpBody);
    return res.json({ status: true, message: 'başarılı' });
  }

  @Post('/signIn')
  async signIn(@Body() body: UserSignInDTO, @Res() res: Response) {
    const data = await this.userService.signIn(body);
    return res.json({ status: true, message: 'başarılı', data });
  }
}
