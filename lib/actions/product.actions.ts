"use server"

import { prisma } from '../prisma'


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
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) throw new Error(`Product with slug "${slug}" not found`);

  return {
    ...product,
    id: product.id.toString(), // if id is BigInt
    createdAt: product.createdAt.toISOString(),
  };
};
