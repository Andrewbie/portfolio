import React from "react";

const Projectcard = ({ title, image, description, link }) => {
  return (
    <>
      <div className="card relative w-[300px] h-[250px] md:w-[350px] md:h-[300px] bg-[#160620] rounded-2xl overflow-hidden text-[#d1d1d1]">
       
        <div className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all flex justify-center items-center">
            <a href={link} target="_blank" className="bg-[#18172b] p-3 rounded-full text-sm md:text-lg">
            <i class="fa-solid fa-link"></i>
            <span className="p-2">Github Repo</span>
            </a>
        </div>
        <div className="image h-[65%]">
          <img src={image} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="p-2">
          <div className="text-sm md:text-lg font-semibold">{title}</div>
          <div>
            <p className="text-xs md:text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="">
      </div>
    </>
  );
};

export default Projectcard;
