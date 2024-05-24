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
    <>  <div className='skill h-[100vh] w-[100%] p-10 flex flex-col gap-12 '>
        <div>
            <div className='text-[#fff] text-4xl font-bold'>Technical Proficiency</div>
        </div>
        <div className='flex w-[100%] h-[100%] items-start mt-6'>
            <div className='text-white flex flex-wrap w-[50%] gap-8' data-aos="fade-right">
                {SKILLS.map((items)=>{
                    return(
                    <Skillcard title={items.title} iconurl={items.icon} isActive={selectedSkill.title===items.title} onClick={()=>{
                        handleSelectedSkill(items)
                    }}/>
                )
                })}
            </div>
            <div className='w-[50%]' data-aos="fade-left">
                <Skillinfo heading={selectedSkill.title} skills={selectedSkill.skills}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Skills