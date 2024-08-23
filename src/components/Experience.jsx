import React from 'react'

const Experience = () => {
  return (
    <>
        <div className='w-full md:h-screen bg-[#212121]'>
            <div className='text-white p-5 text-4xl font-bold text-center'>Education and Experience</div>
            <div className='flex text-white justify-center relative items-center pt-28 px-5 '>
                <div className='h-full w-1 bg-white absolute'></div>
                <div className='w-full flex flex-col'>
                    <div className='w-1/2 flex items-center gap-5 justify-end'>
                        <div className='flex flex-col items-end'>
                            <div className='text-lg font-semibold'>Webstack Academy</div>
                            <div>FUllstack Developer Intern</div>
                            <div>(Feb 24 - May 24)</div>
                        </div>
                        <div className='w-10 h-1 bg-white'></div>
                    </div>
                    <div className='w-1/2 flex gap-5 items-center self-end'>
                        <div className='w-10 h-1 bg-white'></div>
                        <div>
                            <div>Eduskills AICTE (Virtual Internship)</div>
                            <div>Foundation in Machine Learning and Cloud Computing</div>
                            <div>(Apr 23 - Jun 23)</div>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center gap-5 justify-end'>
                        <div className='flex flex-col items-end'>
                            <div className='text-lg font-semibold'>Bachlors of Technology</div>
                            <div>Computer Science and Engineering</div>
                            <div>(2021 - 2025)</div>
                        </div>
                        <div className='w-10 h-1 bg-white'></div>
                    </div>
                    <div className='w-1/2 flex gap-5 items-center self-end'>
                        <div className='w-10 h-1 bg-white'></div>
                        <div>
                            <div>Intermediate</div>
                            <div>Science (Mathematics and Physics)</div>
                            <div>(2021)</div>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center gap-5 justify-end'>
                        <div className='flex flex-col items-end'>
                            <div className='text-lg font-semibold'>Metriculation</div>
                            <div>CBSE</div>
                            <div>(2018)</div>
                        </div>
                        <div className='w-10 h-1 bg-white'></div>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience