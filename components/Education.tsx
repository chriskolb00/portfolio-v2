import React from 'react'
import Title from './Title'
import { FaGraduationCap } from 'react-icons/fa'
import Skills from './Skills'
const courses =[
    "Intro to Software Engineering", "Data Structure", "C Programming", "Computer Architecture", "Communication Network","Graph Theory",
    "Human Computer Interaction","Intro to Project Management","Managing Database Environment","Theory of Computation","Deterministic Operation Research Modeling"
]
const Education = () => {
  return (
    <div className='wrapper space-y-10'>
        <Title text="Education" icon={<FaGraduationCap />}/>
        <div >
            <h2 className='text-xl font-bold'>University of Nebraska Omaha</h2>
            <h3 className='text-lg  font-semibold'>Computer Science</h3>
            <div className='mt-5 text-md'>
                <p className=''>9/2019 - Present</p>
                <div className='flex flex-wrap mt-5'>
                    {courses.map((course)=>(
                        <p key={course} className="m-1 border border-blue-800 px-5 py-2 text-lg bg-transparent hover:text-white hover:border-blue-500 hover:bg-black rounded-sm">
                            {course}
                        </p>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Education