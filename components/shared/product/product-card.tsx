import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={286}
          height={286}
        />
      </Link>
      <CardHeader>
        <CardTitle>
          <h3 className='leading-normal'>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
        </CardTitle>
        <CardDescription>{product.brand}</CardDescription>
      </CardHeader>
      <CardFooter className='flex items-center justify-between'>
        <p>{product.rating} Stars</p>
        <p className='font-bold'>${product.price}</p>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
