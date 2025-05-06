import React from 'react'
import Title from './Title'
import {GiSkills} from 'react-icons/gi'
const skill_list =[
    "JavaScript","HTML","CSS","React.js","Tailwindcss","Vercel", "Netify",
    "TypeScript", "Node.js","Next.js","MongoDB","MySQL","PostgreSQL",
    "Java","Python","C", "Eclipse", "Github",  "Git", "Jira", "Clickup",
    "MS Team", "docker","linux","kubernetes","AWS", "Azure devops",
]
const Skills = () => {
  return (
    <div className='wrapper'> 
        <Title text="Skills" icon={<GiSkills/>} />
        <div className='flex flex-wrap'>
            {skill_list.map((skill:any)=>(
                <p key={skill} className="m-1 border border-blue-800 px-5 py-2 text-lg bg-transparent hover:text-white hover:border-blue-500 hover:bg-black rounded-sm">{skill}</p>
            ))}
            
        </div>
    </div>
  )
}

export default Skills