import Image from 'next/image'
import React from 'react'
import errorImage from '../../public/images/404-img.jpg'
import Link from 'next/link'

export default function Error404() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image src={errorImage} width={500} height={500} quality={100} alt='Error Img'/>
        <Link className='text-primary' href={'/'}>Return to Home</Link>
    </div>
  )
}
