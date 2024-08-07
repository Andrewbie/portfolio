import React from 'react'
import Projectcard from './Projectcard'
import {PROJECTS} from "../utils/Projects"

const Project = () => {
  return (
    <>
        <div id='projects' className='h-[] w-[100%] pt-16 flex flex-col items-center pb-6 gap-8 bg-[#1d1d1d]'>
            <div className='text-white text-3xl md:text-5xl font-bold'>Projects</div>
            <div className='flex flex-wrap gap-6 items-center justify-center'>
                {PROJECTS.map((item)=>{
                  return(
                    <Projectcard title={item.title} image={item.image} description={item.description} link={item.link}/>
                  )
                 })}  
            </div>
        </div>
    </>
  )
}

export default Project