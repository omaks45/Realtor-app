/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, ParseEnumPipe, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto, ProductKeyDto } from '../dto/auth.dto';
import { UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signup/:userType')

    
    async signUp(
        @Body() body: SignupDto,
        @Param('userType', new ParseEnumPipe(UserType)) userType: UserType
    ){
        // check if the user is not a buyer
        if (userType !== UserType.BUYER) {
            if (!body.productKey) {
                throw new UnauthorizedException()
            }
            //bring the valid product key from the database and compare
            const validProductKey = `${body.email}-${userType}-${process.env.PRODUCTKEYGEN}`;
            // compare the product key
            const isValid = await bcrypt.compare(validProductKey, body.productKey);
            if (!isValid) {
                throw new UnauthorizedException();
            }
        }
        return this.authService.signUp(body);
    }
    // create an endpoint for login

    @Post('/login')
    login(@Body() body: LoginDto) {
        return this.authService.login(body);
    }

    // endpoint for generate product key
    @Post('/key')
    generateProductKey(@Body() {userType, email}: ProductKeyDto) {
        return this.authService.generateProductKey(email, userType);
    }
}
