import 'dotenv/config';
import { PrismaClient } from '@/lib/generated/prisma/client';
import sampleData from './sample-data';

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()

  await prisma.product.createMany({ data: sampleData.products })

  console.log('Database seeded successfully')

}

main()