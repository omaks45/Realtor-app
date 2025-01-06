/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signup')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUp(@Body() body: SignupDto) {
        return this.authService.signUp();
    }
}
