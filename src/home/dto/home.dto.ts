/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { PropertyType } from '@prisma/client';


export class HomeResponseDto {
  id: string; // Matches Prisma's String @db.ObjectId
  address: string;
  numberOfBedrooms: string; // Matches Prisma's String
  numberOfBathrooms: number; // Matches Prisma's Float
  city: string;
  listedDate: Date;
  price: number; // Matches Prisma's Float
  landSize: number; // Matches Prisma's Float
  propertyType: PropertyType;
  Images: string; // Matches Prisma's String[]
  @Exclude()
  createAt: Date;
  @Exclude()
  updatedAt: Date;
  @Exclude()
  realtorId: string; // Matches Prisma's String @db.ObjectId

  constructor(partial: Partial<HomeResponseDto>) {
    Object.assign(this, partial);
  }
}
