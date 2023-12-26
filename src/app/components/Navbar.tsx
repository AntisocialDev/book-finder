import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex py-5 px-5 sm:px-20 justify-between items-center'>
        <Link href='/'><h2 className='text-3xl text-primary font-bold'>BookFinder</h2></Link>
        <div className='hidden sm:flex flex gap-5'>
            <a>About</a>
            <a target='_blank' href='https://www.linkedin.com/in/victor-banjo-935088163/'>Contact</a>
        </div>
    </nav>
  )
}
