import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Match } from 'src/utils/validators';

export class UserSignUpDTO {
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @MinLength(6)
  @Match('repeatPassword', { message: 'Parolalar uyuşmuyor !' })
  password: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @MinLength(6)
  repeatPassword: string;
}

export class UserSignInDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
