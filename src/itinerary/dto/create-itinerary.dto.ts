import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateItineraryDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
