import Image from 'next/image'
import React from 'react'   
const Banner = () => {
  return (
    <div className='py-20 flex flex-col md:flex-row md:items-start items-center gap-20 wrapper'>
        <div className='w-[250px] h-[300px] rounded-full bg-black'>
            <Image src="/images/profile.png" alt="Profile image" width={250} height={250}
            className='rounded-full border-sm object-cover border-indigo-600 p-1'/>
        </div>
        <div className='mt-10 w-3/4 flex flex-col items-center md:items-start gap-5'>

            <h1 className='text-5xl font-bold text-white'>
                Christian Kolb
            </h1>
            <h3 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'>
                Front-End Developer
            </h3>
            <p className='text-base tracking-wide'>
                
            </p>
        </div>
    </div>
  )
}

export default Banner