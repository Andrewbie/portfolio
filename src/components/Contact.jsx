import React, {useEffect} from 'react'
import Form from './Form'
import Lottie from 'lottie-web'
import contactanim from "../../public/lottie/contact-us.json"

const Contact = () => {
  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container:document.querySelector("#contact-anim"),
      animationData:contactanim,
      loop:true
    });
    return () => instance.destroy();
  },[])
  return (
    <>
      <div id='contact-us' className='w-[100%] pb-9 md:h-[100vh] bg-[#232328] text-white pt-20'>
          <div className='text-2xl md:text-4xl font-bold text-center mb-10'>Get in touch</div>
          <div className='md:flex'>
              <div className='mt-6 md:w-[50%]'>
                <Form/>
              <div className='flex gap-2 items-center justify-center mt-6'>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center hover:bg-white hover:text-black' href="https://www.linkedin.com/in/shanu-aaryan/" target='_blank'><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center hover:bg-white hover:text-black' href="https://github.com/Andrewbie/" target='_blank'><i class="fa-brands fa-lg fa-github"></i></a>
                    <a className='w-[40px] h-[40px]  object-contain rounded-full overflow-hidden border-2 border-white flex items-center justify-center hover:bg-white hover:text-black' href="https://www.instagram.com/andrewbie_" target='_blank'><i class="fa-brands fa-lg fa-linkedin-in"></i></a>
              </div>
              </div>

              <div className='md:flex hidden w-[50%] items-center justify-end'>
                <div className='w-[75%]'>
              <div id="contact-anim" className="w-[95%] h-[95%] object-cover flex justify-end items-center">
              
              </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact