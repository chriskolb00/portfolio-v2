import React from 'react'
import Title from './Title'
import {FaProjectDiagram} from 'react-icons/fa'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div className='wrapper '>
        <Title text="Projects" icon={<FaProjectDiagram/>} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center'>
            <ProjectCard 
            img={""}
            title="Thread Clone"
            link="https://www.google.com"/>
            <ProjectCard 
            img={""}
            title="Weather App"
            link="https://www.google.com"/>
            <ProjectCard 
            img={""}
            title="Photo App"
            link="https://www.google.com"/>
            <ProjectCard 
            img={""}
            title="Random App"
            link="https://www.google.com"/>
        </div>
        
    </div>
  )
}

export default Projects