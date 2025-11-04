"use server"

import { prisma } from '../prisma'


// get all products
export const getLatestProducts = async () => {

  const data = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  })

  return data
}


// get single product by slug
export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({ where: { slug } })
}