import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CustomerCreateDTO {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  placeName?: string | null;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  operatorName?: string | null;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  phoneNumber?: string | null;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  description?: string | null;
}

export class CustomerUpdateDTO {
  @ApiProperty()
  placeName?: string | null;

  @ApiProperty()
  operatorName?: string | null;

  @ApiProperty()
  phoneNumber?: string | null;

  @ApiProperty()
  description?: string | null;
}
