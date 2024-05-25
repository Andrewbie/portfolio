import React from 'react'

const Projectcard = ({title, image, description, link}) => {
  return (
    <>
        <div className='md:max-w-[30%] md:min-h[33%] md:min-w-[25%]  bg-[#fcf4ff] p-3 md:p-5 rounded-xl' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <div className='relative object-cover object-center rounded-xl overflow-hidden'>
                <div className='absolute opacity-0 hover:opacity-100 active:opacity-100 transition-all duration-200 z-[5] w-[100%] h-[100%]  backdrop-blur-[15px] text-white text-xl flex flex-col items-center p-5 justify-center'>
                    <div>{description}</div>
                    <div><a href={link}>click here</a></div>
                </div>
                <img src={image} alt={title} />
            </div>
            <div className='font-semi-bold text-lg'>{title}</div>
        </div>
    </>
  )
}

export default Projectcard