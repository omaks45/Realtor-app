/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto, ProductKeyDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signup/:userType')

    
    signUp(@Body() body: SignupDto) {
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
