import React from 'react'
import Projectcard from './Projectcard'

const Project = () => {
  return (
    <>
        <div className='h-[] w-[100%] pt-16 flex flex-col items-center pb-6 gap-8 project-sec'>
            <div className='text-white text-5xl font-bold'>Projects</div>
            <div className='flex flex-wrap gap-3 items-center justify-around'>
                <Projectcard title="something here" image="/space-bg.jpg" description="kndnddfsaaaaaaaaaade" link="www.google.com"/>
                <Projectcard title="something here" image="/space-bg.jpg" description="kndnddfsaaaaaaaaaade" link="www.google.com"/>
                <Projectcard title="something here" image="/space-bg.jpg" description="kndnddfsaaaaaaaaaade" link="www.google.com"/>
                <Projectcard title="something here" image="/space-bg.jpg" description="kndnddfsaaaaaaaaaade" link="www.google.com"/>
            </div>
        </div>
    </>
  )
}

export default Project