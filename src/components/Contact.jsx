import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#232328] text-white pt-20'>
          <div className='text-4xl font-bold text-center mb-10'>Get in touch</div>
          <div className='md:flex'>
              <div className='mt-6 md:w-[50%]'>
                <Form/>
              <div className='flex gap-2 items-center justify-center mt-6'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
              </div>
              </div>

              <div className='md:flex hidden w-[50%] items-center justify-center'>
                <div className='w-[60%] object-cover contact-img overflow-hidden'><img src="/contact.jpg" alt="" /></div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact