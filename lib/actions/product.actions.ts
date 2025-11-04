"use server"

import { prisma } from '../prisma'
import { convertToPlainObject } from '../utils'


// get all products
export const getLatestProducts = async () => {

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  })

  return data
}


// get single product by slug
export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({ where: { slug: slug } })
  return product
}