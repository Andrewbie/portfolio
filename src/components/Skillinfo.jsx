import React from "react";

const Skillinfo = ({ heading, skills }) => {
  return (
    <>
      <div className="text-white w-[100%] flex flex-col items-center justify-center md:gap-7 border-2 h-[100%] p-5 rounded-xl">
        <div className="text-white text-lg md:text-3xl font-semi-bold">{heading}</div>
        <div className="w-[100%] p-2 md:p-5">
          {skills.map((item) => {
            return (
              <div className="flex w-[100%] items-center md:gap-8 md:mb-[20px] justify-center">
                <div className="w-[90%] md:w-[300px] text-[15px] md:text-xl">{item.skill}</div>
                <div className="bg-[#12041c] h-[7px] w-[450px] flex items-center rounded-full overflow-hidden">
                  <div
                    className={`w-[${item.percentage}%] bg-[#f0cbff] h-[95%]`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skillinfo;
