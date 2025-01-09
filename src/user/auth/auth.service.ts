/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs'
import { UserType } from '@prisma/client';


interface SignupParams {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    async signUp({ email, password, phoneNumber, name }: SignupParams) {
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email,
            }
        });
        if (userExist) {
            throw new ConflictException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prismaService.user.create({
            data: {
                email,
                password: hashedPassword,
                phoneNumber,
                name,
                userType: UserType.BUYER
            }
        })
        return user;
        //console.log(hashedPassword);

        //console.log(userExist);
        
    }
}
