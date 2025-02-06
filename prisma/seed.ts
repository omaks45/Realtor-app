/* eslint-disable prettier/prettier */
import { PrismaClient, PropertyType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.home.create({
        data: {
            address: "123 Main St",
            numberOfBedrooms: "3",
            numberOfBathrooms: 2.5,
            city: "New York",
            price: 500000,
            landSize: 1500,
            propertyType: PropertyType.RESIDENTIAL,
            realtorId: "65b1a9e8f4d4a3d2b1e8c6e1"
        }
    });
    console.log("Seeded home successfully");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
