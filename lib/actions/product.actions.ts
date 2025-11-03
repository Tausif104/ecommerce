"use server"

import { PrismaClient } from '../generated/prisma/client'
import { convertToPlainObject } from '../utils'

// initialize prisma client
const prisma = new PrismaClient()

// get all products
export const getLatestProducts = async () => {

  const data = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  })

  return convertToPlainObject(data)
}


// get single product by slug
export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({ where: { slug: slug } })
}