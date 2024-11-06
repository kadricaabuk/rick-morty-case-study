import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex p-2 bg-gray-200'>
        <Link href='/' className='font-bold text-lg'>
            Rick & Morty Characters
        </Link>
    </header>
  )
}

export default Header