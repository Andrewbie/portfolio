import React from "react";

const Skillcard = ({ title, iconurl, isActive, onClick }) => {
  return (
    <>
      <div className="w-[45%]">
        <div
          className={`${isActive ? "active" : ""} border-2 rounded-lg p-4 text-center bg-[#7676762b] backdrop-blur-[20px] relative cursor-pointer transition-all duration-[0.3s] ease-in hover:bg-[#23163d] active:bg-[#23163d] flex gap-4 items-center justify-start p-5`}
          onClick={() => {
            onClick();
          }}
        >
          <div className="w[30px] h-[50px] object-contain">
            <img src={iconurl} alt={title} className="w-[100%] h-[100%]"/>
          </div>
          <span className="text-xl">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Skillcard;
