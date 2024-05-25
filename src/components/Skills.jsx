import React, { useState } from 'react'
// import {SKILLS} from '../utils/Skills'
import Skillcard from './Skillcard'
import { SKILLS } from '../utils/Skills'
import Skillinfo from './Skillinfo'
const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

    const handleSelectedSkill = (data)=>{
        setSelectedSkill(data)
    }

  return (
    <>  <div id='skills' className='skill md:h-[100vh] w-[100%] pt-13 p-10 flex flex-col gap-12 '>
        <div>
            <div className='text-[#fff] text-2xl md:text-4xl font-bold'>Technical Proficiency</div>
        </div>
        <div className='flex w-[100%] h-[100%] items-start mt-6 md:flex-row flex-col-reverse gap-8'>
            <div className='text-white flex flex-wrap md:w-[50%] w-full h-[50%] gap-8 items-center justify-center' data-aos="flip-up" >
                {SKILLS.map((items)=>{
                    return(
                    <Skillcard title={items.title} iconurl={items.icon} isActive={selectedSkill.title===items.title} onClick={()=>{
                        handleSelectedSkill(items)
                    }}/>
                )
                })}
            </div>
            <div className='md:w-[50%] w-full h-[50%] md:h-full' data-aos="flip-up" data-aos-anchor-placement="top-center">
                <Skillinfo heading={selectedSkill.title} skills={selectedSkill.skills}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Skills