/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomeService {
    constructor(private readonly prismaService: PrismaService){}
    getHomes() {
        // findMany() is a method provided by PrismaClient that returns all records from the Home table
        return this.prismaService.home.findMany();
    }
}
