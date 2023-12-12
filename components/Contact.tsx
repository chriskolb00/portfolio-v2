import React from 'react'
import Title from './Title'
import  {RiContactsLine} from 'react-icons/ri'
import SocialLinks from './SocialLinks'
const Contact = () => {
  return (
    <div className='wrapper'>
        <Title text="Contact Me" icon={<RiContactsLine/>}/>
        <div className='max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center'>
          <h2 className='text-2xl font-bold'>
            Let us create awesome products!
          </h2>
          <p className="text-lg tracking-wide font-medium text-center">
            I am always open to duscuss project, improve online presence, or helping with website design and converting challenges.
          </p>
          <a href="mailto:cmlkolb@gmail.com">
            <button className='px-10 py-3 w-50 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-xl font-bold text-white
            rounded-lg hover:from-indigo-500 hover:to-blue-500 duration-500'>
              Reach Me
            </button>
          </a>
        </div>
        <div className='mt-10 flex items-center justify-center gap-10'>
          <SocialLinks title="Github" link="https://github.com/chriskolb00"/>
          <SocialLinks title="linkedIn" link="https://www.linkedin.com/in/christian-kolb-411998240/"/> 
        </div>
        
    </div>
  )
}

export default Contact