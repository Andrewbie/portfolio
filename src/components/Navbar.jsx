import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pt-4 px-12 backdrop-blur-[25px] w-[100%]'>
        <div>
            <div className='text-2xl font-bold text-[#efefef]'>Andrewbie</div>
        </div>
        <div className='flex items-center text-[#efefef] gap-3'>
            <div className='flex gap-4 text-lg'>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-2'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                </div>
                <div>
                    <button className='border-2 border-white px-4 py-3'>Let's Connect</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar