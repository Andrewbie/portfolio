import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <div className="bg-spacebg w-[100%] h-[100vh] bg-cover object-center items-center flex flex-col md:flex-row pt-10 md:pt-20">
        <div className="w-[100%] h-[65%] md:h-[100%] md:w-[55%] p-5 md:justify-start md:items-start justify-center items-center md:ml-20 flex flex-col gap-10">
          <div className="p-2 text-white border-2 text-sm md:text-lg w-fit" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500">
            Welcome to my Portfolio
          </div>
          <div className="text-white text-3xl md:text-4xl lg:text-6xl font-bold w-full flex justify-center flex-col items-center md:items-start" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500" data-aos-delay="500">
            <div className="">Hi! I am Shanu</div>
            <div className="">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Engineer"],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            </div>
          </div>
          <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500" data-aos-delay="500">
            <p className="text-gray-300 text-xs w-full md:w-[85%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi veritatis autem quo, alias eligendi consectetur perferendis quibusdam hic rem qui quidem eos eaque itaque, fugiat voluptatum optio recusandae. Quo, perspiciatis.</p>
          </div>
          <div className="text-white text-sm md:text-lg" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500" data-aos-delay="500">
            <a href="/Resume.pdf" target="blank" className="flex gap-3 items-center font-semibold">
            <div>Check Resume</div>
            <i class="fa-regular fa-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="w-[100%] md:w-[45%] h-[35%] md:h-full flex justify-end">
            <div className="w-[95%] h-[95%] object-cover  flex justify-end"><img className="" src="/astronaut.png" alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
