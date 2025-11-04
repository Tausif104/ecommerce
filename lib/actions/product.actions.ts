"use server"

import { prisma } from '../prisma'
import { convertToPlainObject } from '../utils'


// get all products
export async function getLatestProducts() {

  const data = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  })

  return convertToPlainObject(data)
}


// get single product by slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug } })
}