/* eslint-disable prettier/prettier */
import {IsString, IsNotEmpty, IsEmail, MinLength, Matches} from 'class-validator'


export class SignupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {message: 'Invalid phone number'})
    phoneNumber: string;

    @IsEmail()
    email: string;

    @MinLength(6)

    password: string;
}