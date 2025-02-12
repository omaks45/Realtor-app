/* eslint-disable prettier/prettier */
import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs'
import { UserType } from '@prisma/client';
import * as jwt from 'jsonwebtoken';


interface SignupParams {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}
// create a login interface
interface LoginParams {
    email: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    async signUp({ email, password, phoneNumber, name }: SignupParams, userType: UserType) {
        //check if user already exists
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email,
            }
        });
        if (userExist) {
            throw new ConflictException('User already exists');
        }
        //hash the password

        const hashedPassword = await bcrypt.hash(password, 10);
        //create a user

        const user = await this.prismaService.user.create({
            data: {
                email,
                password: hashedPassword,
                phoneNumber,
                name,
                userType,
            }
        })
        return this.generateJwt(name, user.id);
    }

        // User login method
        async login({ email, password }: LoginParams) {
            // Check if the user exists
            const user = await this.prismaService.user.findUnique({
                where: { email }
            });
            if (!user) {
                throw new HttpException('Invalid credentials', 400);
            }
    
            // Compare the password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new HttpException('Invalid credentials', 400);
            }
    
            // Generate and return JWT
            return this.generateJwt(user.name, user.id);
        }
    
        // Method to generate JWT
    private generateJwt(name: string, id: string) {
        return jwt.sign(
            { name, id },
            process.env.mySecreteKey,
            { expiresIn: 3600000 }
        );
    }

    //generate product key
    generateProductKey(email: string, userType: UserType) {
        const typeOfUser = `${email}-${userType}-${process.env.PRODUCTKEYGEN}`;
        return bcrypt.hash(typeOfUser, 10);
    }
}
