import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#232328] text-white pt-7'>
          <div>Get in touch</div>
          <div>
              <div className='mt-6'>
                <Form/>
              </div>
              <div className='flex gap-2 items-center justify-center mt-6'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center' href=""><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
              </div>

              <div>
                {/* <Map/> */}
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact