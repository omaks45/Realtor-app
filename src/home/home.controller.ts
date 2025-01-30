/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    getHomes(){
        return []
        
    }
}
