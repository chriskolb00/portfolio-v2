import React from 'react'
import Title from './Title'
import {FaProjectDiagram} from 'react-icons/fa' 
import ProjectCard from './ProjectCard'
import p1 from '../public/images/weather.png'
import p2 from '../public/images/imageGen.png'
import p3 from '../public/images/thread.png'
import p4 from '../public/images/youtube.png'
const Projects = () => {
  return (
    <div className='wrapper '>
        <Title text="Projects" icon={<FaProjectDiagram/>} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center'>
            <ProjectCard 
            img={p1}
            title="Weather App"
            link="https://weather-app-react-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img={p2}
            title="Photo Generator"
            link="https://photo-app-react-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img={p3}
            title="Thread Clone"
            link="https://thread-app-chriskolb00.vercel.app/"/>
            <ProjectCard 
            img={p4}
            title="Youtube Clone"
            link="https://youtube-clone-ck.netlify.app/"/>
        </div>
        
    </div>
  )
}

export default Projects