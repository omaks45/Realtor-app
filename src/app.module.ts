/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { HomeModule } from './home/home.module';



@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, PrismaModule, HomeModule],
})
export class AppModule {}
