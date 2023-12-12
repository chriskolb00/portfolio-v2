import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'
interface Props{
    title:string;
    link:string;
}
const SocialLinks = ({title, link}:Props) => {
  return (
    <a href={link} target="_blank"
    className='mt-7 flex items-center justify-center gap-3 text-xl text-gray-500 font-semibold group'>
        <p className='group-hover:text-white'>{title}</p>
        <FiArrowUpRight className="translate-x-0 translate-y-0 
        group-hover:translate-x-1 group-hover:-translate-y-1 duration-500"/>
    </a>
  )
}

export default SocialLinks