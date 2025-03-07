/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Query} from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResponseDto } from './dto/home.dto';

@Controller('home')
export class HomeController {
    constructor(private readonly homeService: HomeService){}
        
    @Get()
    getHomes(
        @Query('city') city?: string,
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string,
        @Query('propertyType') propertyType?: string,
    ): Promise<HomeResponseDto[]>{
        console.log({
            city,
            minPrice,
            maxPrice,
            propertyType,
        })
        return this.homeService.getHomes();
            
    }
    @Get(':id')
    getHomeById(){
        return {}
    }
    @Post()
    createHome() {
        return {}
    }

    @Put(':id')
    updateHome() {
        return {}
    }

    @Delete(':id')
    deleteHome() {

    }
}
