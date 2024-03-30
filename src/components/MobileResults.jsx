import React, { useContext, useState } from "react";
import { down } from "../assets/index";
import { TabContext } from "../context/TabContext";

const MobileResults = () => {
  const [open, setOpen] = useState({});
  const { activeTabContent } = useContext(TabContext);

  const toggleAccordion = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));  };

  return (
    <div className="mt-6 mb-6 flex flex-col gap-5">
      {activeTabContent &&
        activeTabContent?.map((item, index) => (
          <div key={item.id} className="bg-[#1A1635] rounded-lg">
            <div className="flex justify-between items-center p-3 text-white text-base font-normal leading-6 -tracking-[0.022em]">
              <div className="w-8 h-8 bg-[#0A8BEC] flex items-center justify-center ml-3 leading-4 ">
                {item.rank}
              </div>
              <h6 className="uppercase">{item.team}</h6>
              <h6>{item.name}</h6>
              <p>{item.total}</p>
              <div onClick={()=>toggleAccordion(index)}>
                <img
                  src={down}
                  alt="arrow"
                  className={`cursor-pointer w-6 h-6 transform object-none ${
                    open[index] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {open[index] && (
              <div className="text-white text-base font-normal p-4 leading-6 -tracking-[0.022em] border-t border-[#080915]">
                <div className="flex justify-end items-center mb-4 gap-7">
                  <h6>
                    D:{" "}
                    {item.categoryD !== undefined && item.categoryD.toFixed(3)}
                  </h6>
                  <h6>
                    E:{" "}
                    {item.categoryE !== undefined && item.categoryE.toFixed(3)}
                  </h6>
                  <h6>
                    P:{""} {item.pen !== undefined && item.pen.toFixed(3)}
                  </h6>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h6>Score</h6>
                    <p>{item.total}</p>
                  </div>
              
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default MobileResults;
