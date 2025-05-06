
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Title from './Title'
const Aboutme = () => {
  return (
    <div className='wrapper px-5'>
        <Title text="About Me" icon={<CgProfile/>} /> 
        <div className='tracking-wdie flex flex-col gap-6'>
            <p className='text-lg'>
            Detail-oriented and motivated software developer with experience in front-end development. 
            Passionate about building scalable and efficient applications with modern web technologies. 
            Adept at problem-solving, collaborating in teams, and continuously learning to deliver impactful solutions.
            </p>
            <p className='text-lg'>
            Actively expanding expertise in backend development, databases, and modern web frameworks to become a well-rounded full-stack developer. 
            Eager to continuously learn and apply new technologies to solve complex problems.
            </p>
            
        </div>
        
    </div>
  )
}

export default Aboutme