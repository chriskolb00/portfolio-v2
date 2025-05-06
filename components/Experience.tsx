import React from 'react'
import {MdWork } from 'react-icons/md'
import {SiReactivex} from 'react-icons/si'
import Title from './Title'
import ExperienceCard from './ExperienceCard'
const Experience = () => {
  return (
    <div className='wrapper'>
        <Title text="Experiences" icon={<MdWork />}/>
        <div className='space-y-10 mt-10'>
            <ExperienceCard title="ShineForth"
            subTitle="Software Developer 4/2024 - current" icon={<SiReactivex/>} /> 
            <ExperienceCard title="Gold Mountain Restaurant"
            subTitle="Waiter 10/2019 - 3/2023" icon={<SiReactivex/>} /> 
        </div>
    </div>
  )
}

export default Experience