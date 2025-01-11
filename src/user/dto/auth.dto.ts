/* eslint-disable prettier/prettier */
import { UserType } from '@prisma/client';
import {
    IsString, 
    IsNotEmpty, 
    IsEmail, 
    MinLength, 
    Matches, 
    IsEnum, 
    IsOptional} from 'class-validator'


export class SignupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {message: 'Invalid phone number'})
    phoneNumber: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    @IsString()
    password: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    productKey?: string;
}
// login dto validation

export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

// product key dto validation
export class ProductKeyDto {
    @IsEmail()
    email: string;

    @IsEnum(UserType)
    userType: UserType;
}