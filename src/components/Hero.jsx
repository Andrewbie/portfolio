import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-web";
import heroanim from "../../public/lottie/hero-anim.json"
const Hero = () => {
  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container:document.querySelector("#hero-anim"),
      animationData:heroanim,
      loop:true
    });
    return () => instance.destroy();
  },[])
  return (
    <>
      <div id="home" className="bg-spacebg w-[100%] h-[100vh] bg-cover object-center items-center flex flex-col md:flex-row pt-16 md:pt-[170px]">
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
            <p className="text-gray-100 text-sm w-full md:w-[85%]">Enthusiastic Software Developer with a strong foundation in full-stack development and a passion for learning new technologies. Eager to apply problem-solving skills and technical knowledge to contribute to innovative projects and team success.</p>
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
            <div id="hero-anim" className="w-[95%] h-[95%] object-cover flex justify-end">
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
