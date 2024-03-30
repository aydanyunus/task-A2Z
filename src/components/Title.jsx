import React from "react";
import { arrow, menu } from "../assets/index";

const Title = () => {
  return (
    <>
      <div className="flex items-center justify-end w-full sm:hidden">
        <button className="flex items-center justify-center py-6 sm:px-4 px-[22px]">
          <img src={menu} alt="menu" className="w-7 h-7 cursor-pointer" />
        </button>
      </div>
      
      <div className="sm:pt-[180px] pt-12">
        <div className="flex items-start">
          <button className="flex items-center">
            <img
              src={arrow}
              alt="arrow"
              className="sm:w-7 sm:h-7 w-5 h-5 cursor-pointer object-contain"
            />
          </button>
          <div className="sm:ml-8 ml-5">
            <h1 className="font-normal sm:text-4xl text-2xl sm:leading-[44px] leading-8 text-white -tracking-[0.022em]">
              FIG ARTISTIC GYMNASTICS WORLD CUP
            </h1>
            <div className="sm:mt-4 mt-2 flex items-center">
              <p className="sm:text-xl text-base sm:leading-7 leading-6 font-normal -tracking-[0.022em] text-[#9598B1] sm:text-[#F2F2F2]">
                Doha, Qatar
              </p>
              <div className="sm:w-6 w-4 h-0 border-[1px] border-[#9598B1] sm:border-[#F2F2F2] rotate-90" />
              <span className="sm:text-xl text-base leading-7 font-normal -tracking-[0.022em] text-[#9598B1] sm:text-[#F2F2F2]">
                12/03/2023 - 13/02/2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
