/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


interface SignupParams {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    async signUp({ email }: SignupParams) {
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email,
            }
        });
        if (userExist) {
            throw new ConflictException('User already exists');
        }

        //console.log(userExist);
        
    }
}
