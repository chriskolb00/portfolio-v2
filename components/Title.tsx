import React, { ReactNode } from 'react'

interface Props{
    text:string;
    icon: ReactNode;
}
const Title = ({ text, icon}: Props ) => {
  return (
    <div className='flex items-center gap-4 text-2xl group pb-5'>
            <h3 className='font-semibold relative overflow-hidden'>{text}
            <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-300 -translate-x-[100%] group-hover:translate-x-0 duration-500'></span>
            </h3>
            <span className="text-blue-300"> {icon} </span> 
    </div>
  )
}

export default Title