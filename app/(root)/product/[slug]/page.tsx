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

  // const product = await getProductBySlug(slug)

  // if (!product) notFound()

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          {/* images col */}
          <div className='col-span-2'>
            {slug}
            {/* <ProductImage images={product.images} /> */}
          </div>
          {/* code goes here */}
        </div>
      </section>
    </>
  )
}

export default SingleProduct
