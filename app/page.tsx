import Aboutme from '@/components/Aboutme'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills' 

export default function Home() {
  return (
    <main className="w-full bg-gray-900 text-gray-200">
      <div className='max-w-screen-xl mx-auto lg:pt-10'>
        <Banner />
        <Aboutme />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
    </main>
  )
}
