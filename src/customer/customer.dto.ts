import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CustomerCreateDTO {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  placeName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  operatorName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  description: string;
}
