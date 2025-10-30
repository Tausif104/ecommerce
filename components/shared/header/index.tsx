import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/'>
            <Image
              src='/next.svg'
              alt={`${APP_NAME} logo`}
              width={100}
              height={48}
              priority={true}
            />
          </Link>
        </div>
        <div className='space-x-2'>
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
