import React from 'react'
import Title from './Title'
import {FaProjectDiagram} from 'react-icons/fa' 
import ProjectCard from './ProjectCard' 
const Projects = () => {
  return (
    <div className='wrapper '>
        <Title text="Projects" icon={<FaProjectDiagram/>} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center'>
            <ProjectCard 
            img="/images/weather.png"
            title="Weather App"
            link="https://weather-app-react-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img="/images/imageGen.png"
            title="Photo Generator"
            link="https://photo-app-react-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img="/images/thread.png"
            title="Thread Clone"
            link="https://thread-app-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img="/images/youtube.png"
            title="Youtube Clone"
            link="https://youtube-clone-ck.netlify.app/"/>
        </div>
        
    </div>
  )
}

export default Projects