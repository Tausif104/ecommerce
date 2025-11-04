import { getProductBySlug } from '@/lib/actions/product.actions'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductImage from '@/components/shared/product/product-images'

const SingleProduct = async (props: {
  params: { slug: string } | Promise<{ slug: string }>
}) => {
  const { slug } = await props.params

  const product = await getProductBySlug(slug)

  if (!product) notFound()

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          {/* images col */}
          <div className='col-span-2'>
            <ProductImage images={product.images} />
          </div>
          {/* details col */}
          <div className='col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className='h3-bold'>{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <p className='bg-green-100 text-green-700 w-24 text-center py-3 rounded-full font-bold'>
                  ${product.price}
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <p className='font-semibold mb-2'>Description</p>
              <p>{product.description}</p>
            </div>
          </div>

          {/* action col */}
          <div>
            <Card className='py-4'>
              <CardContent>
                <div className='mb-2 flex justify-between'>
                  <div>Price</div>
                  <div>
                    <p className='font-semibold'>${product.price}</p>
                  </div>
                </div>
                <div className='mb-3 flex justify-between'>
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant='outline'>In Stock</Badge>
                  ) : (
                    <Badge variant='destructive'>Out of Stock</Badge>
                  )}
                </div>
                <div>
                  {product.stock > 0 && (
                    <div className='flex justify-center'>
                      <Button className='w-full'>Add to Cart</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct
