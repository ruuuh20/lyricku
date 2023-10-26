
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 mb-4 bg-[#d4dcda]  md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/" className='mb-1 underline md:mb-0 hover:text-gray-500 focus:text-gray-500'>Home</Link>
        

          <nav className="flex w-full ml-auto space-x-3 text-sm md:text-base md:w-auto">
           <Link href="/about">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}