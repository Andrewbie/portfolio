import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggle_nav = ()=>{
        if (nav) {
            setNav(false)
        }
        else{
            setNav(true)
        }
    }
  return (
    <>
    <div className='md:flex justify-between items-center pt-4 px-12 backdrop-blur-[25px] w-[100%] hidden'>
        <div>
            <div className='text-2xl font-bold text-[#efefef]'>Andrewbie</div>
        </div>
        <div className='flex items-center text-[#efefef] gap-3'>
            <div className='flex gap-4 text-lg'>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-2'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                </div>
                <div>
                    <a href='#contact-us' className='border-2 border-white px-4 py-3'>Let's Connect</a>
                </div>
            </div>
        </div>
    </div>

    <div className={`flex justify-between items-center m-auto w-100% backdrop-blur-[25px] md:hidden px-7 h-12`}>
        <div className='text-2xl font-semibold text-white'>Andrewbie</div>

        <div>
            <div><button onClick={toggle_nav}><i class={`fa-sharp fa-solid fa-${nav?"xmark":"bars"} fa-xl text-white`}></i></button></div>
        </div>
    </div>
        <div className={`text-white backdrop-blur-[25px] ${nav?"flex":"hidden"} flex-col transition-all duration-500`}>
        <div className='flex gap-4 text-lg flex-col items-center pt-5'>
                <a href="#home" onClick={toggle_nav}>Home</a>
                <a href="#skills" onClick={toggle_nav}>Skills</a>
                <a href="#projects" onClick={toggle_nav}>Projects</a>
        </div>

        <div className='flex gap-8 items-center flex-col pt-5 pb-8'>
                <div className='flex gap-2'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                </div>
                <div>
                    <a href='#contact-us' onClick={toggle_nav} className='border-2 border-white px-4 py-3'>Let's Connect</a>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar