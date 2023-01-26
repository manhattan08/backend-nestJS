import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example:"user@gmail.com",description:"Email"})
  @IsString({message:"Email should be string!"})
  @IsEmail({},{message:"Incorrect email!"})
  readonly email:string;
  @ApiProperty({example:"rootPassword",description:"Password user"})
  @IsString({message:"Password should be string!"})
  @Length(4,16,{message:"Must be greater than 4 and less than 16"})
  readonly password:string;
}