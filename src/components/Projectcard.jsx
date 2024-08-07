import React from "react";

const Projectcard = ({ title, image, description, link }) => {
  return (
    <>
      <div className="card relative md:w-[20vw] h-[300px] bg-[#160620] rounded-2xl overflow-hidden text-[#d1d1d1]">
       
        <div className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all ">
            hello
        </div>
        <div className="image h-[60%]">
          <img src={image} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="p-2">
          <div className="text-lg font-semibold">{title}</div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </>
  );
};

export default Projectcard;
