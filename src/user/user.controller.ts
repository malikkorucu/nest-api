import { Body, Controller, Get, Header, Post, Res } from '@nestjs/common';
import { UserSignInDTO, UserSignUpDTO } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Response } from 'express';
@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getUsers')
  @Header('Content-type', 'application/json')
  async getUsers(@Res() res: Response) {
    const userData = await this.userService.getAllUsers();
    return res.json({ status: true, data: JSON.stringify(userData) });
  }

  @Post('/signUp')
  async signUp(@Body() signUpBody: UserSignUpDTO, @Res() res: Response) {
    await this.userService.signUp(signUpBody);
    return res.json({ status: true, message: 'başarılı' });
  }
  Z;
  @Post('/signIn')
  async signIn(@Body() body: UserSignInDTO, @Res() res: Response) {
    const data = await this.userService.signIn(body);
    return res.json({ status: true, message: 'başarılı', data });
  }
}
