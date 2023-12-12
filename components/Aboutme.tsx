
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Title from './Title'
const Aboutme = () => {
  return (
    <div className='wrapper px-5'>
        <Title text="About Me" icon={<CgProfile/>} /> 
        <div className='tracking-wdie flex flex-col gap-6'>
            <p className='text-lg'>
                As a senior in computer science, my journey is marked by a drive to help companies build exceptional web applications. 
                What truly motivates and inspires me is the collaborative nature of the field, 
                where working with like-minded individuals fuels my passion.
            </p>
            <p className='text-lg'>Notable achievements include the acquisition of Coursera certifications, dedication to ongoing learning. What sets me apart is an insatiable curiosity, 
                allowing me to dedicate countless hours to a project, never tiring as long as I continually expanding knowledge. Join me as I continues to evolve my 
                skills and embark on a journey of relentless growth and creativity in the world of front-end development.
            </p>
            
        </div>
        
    </div>
  )
}

export default Aboutme