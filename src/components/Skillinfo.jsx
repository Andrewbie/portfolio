import React from "react";

const Skillinfo = ({ heading, skills }) => {
  return (
    <>
      <div className="text-white w-[100%] flex flex-col items-center justify-center gap-7 border-2 h-[80%] p-5 rounded-xl">
        <div className="text-white text-3xl font-semi-bold">{heading}</div>
        <div className="w-[100%] p-5">
          {skills.map((item) => {
            return (
              <div className="flex w-[80%] items-center gap-8 mb-[40px] justify-center">
                <div className="w-[300px] text-xl">{item.skill}</div>
                <div className="bg-[#12041c] h-[7px] w-[100%] flex items-center rounded-full overflow-hidden">
                  <div
                    className={`w-[${item.percentage}] bg-[#f0cbff] h-[95%]`}
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
