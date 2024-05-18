import React from "react";
import 'animate.css';
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div className="bg-spacebg w-[100vw] h-[100vh] bg-cover object-center items-center flex">
        <div className="w-[55%] ml-20 flex flex-col gap-10">
          <div className="p-2 text-white border-2 text-lg w-fit">
            Welcome to my Portfolio
          </div>
          <div className="text-white text-6xl font-bold">
            <div>Hi! I am Shanu</div>
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
          <div>
            <p className="text-gray-300 w-[85%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi veritatis autem quo, alias eligendi consectetur perferendis quibusdam hic rem qui quidem eos eaque itaque, fugiat voluptatum optio recusandae. Quo, perspiciatis.</p>
          </div>
          <motion.div className="text-white text-lg">
            <a href="/Resume.pdf" target="blank" className="flex gap-3 items-center font-semibold">
            <div>Check Resume</div>
            <i class="fa-regular fa-circle-right"></i>
            </a>
          </motion.div>
        </div>
        <div className="w-[45%] flex justify-end">
            <div className="w-[95%] object-contain animate__animated animate__zoomInRight"><img src="/astronaut.png" alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
