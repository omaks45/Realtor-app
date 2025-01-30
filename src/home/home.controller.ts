/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    getHomes(){
        return []
        
    }

    @Get(':id')
    getHomeById(){
        return {}
    }

    @Post()
    createHome() {
        return {}
    }
}
