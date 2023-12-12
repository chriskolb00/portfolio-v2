import Image from 'next/image'
import React from 'react'
interface Props{
    img:string;
    title:string;
    link:string;
}
const ProjectCard = ({img, title, link}:Props) => {
  return (
    <a href={link} target="_blank">
        <div className='w-full h-80 border-sm border-blue-500 overflow-x-hidden rounded-lg mt-5 relative group'>
            <Image src={img} alt={""} width={400} height={320}
            className='w-full h-full object-cover'/>
            <p className='absolute hidden bottom-0  group-hover:inline-block duration-500 w-full
                bg-black py-2 text-white text-center font-semibold'>
                {title}
            </p>
        </div>
    </a>
  )
}

export default ProjectCard