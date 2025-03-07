/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeResponseDto } from './dto/home.dto';

@Injectable()
export class HomeService {
    constructor(private readonly prismaService: PrismaService){}
    async getHomes(): Promise<HomeResponseDto[]> {
        const homes = await this.prismaService.home.findMany({
            //where: { address: { not: '' } }, 
            // Ensures at least some data is returned
            select: {
                id: true,
                address: true,
                numberOfBedrooms: true,
                numberOfBathrooms: true,
                city: true,
                price: true,
                propertyType: true,
                /*Images: {
                    select: {
                        url: true,
                    },
                    take: 1,
                },
                */
            },
        });
          console.log("Homes found:", homes);
          
        // map() is a method provided by JavaScript that creates a new array with the results of calling a provided function on every element in the calling array
        return homes.map((home) => new HomeResponseDto(home));
    }
}
