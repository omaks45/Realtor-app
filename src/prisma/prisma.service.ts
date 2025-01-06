/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    onModuleDestroy() {
        throw new Error('Method not implemented.');
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDesrtoy() {
        await this.$disconnect();
    }
}
