import { Button } from '@/components/ui/button'
import { Folder } from 'lucide-react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center '>
        <div className='bg-gray-100 w-[50px] h-[50px] flex items-center justify-center mx-auto rounded mb-3'>
          <Folder className='mx-auto ' />
        </div>
        <h1 className='text-3xl font-bold mb-2'>Not Found</h1>
        <p>Could Not find requested page</p>
        <Button asChild className='mt-3'>
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
