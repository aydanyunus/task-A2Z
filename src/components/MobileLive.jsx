import React, { useContext, useState } from "react";
import { down } from "../assets/index";
import { TabContext } from "../context/TabContext";

const MobileLive = () => {
  const [open, setOpen] = useState({});
  const { activeTabContent } = useContext(TabContext);

  const toggleAccordion = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="mt-6 mb-6 flex flex-col gap-5">
      {activeTabContent &&
        activeTabContent?.map((item, index) => (
          <div key={item.id} className="bg-[#1A1635] rounded-lg">
            {!item.submitted ? (
              <>
                <div className="flex justify-between items-center p-3 text-white text-base font-normal leading-6 -tracking-[0.022em]">
                  <img
                    className="w-10 h-8 object-contain"
                    src={item.icon}
                    alt={item.icon}
                  />
                  <h6 className="uppercase">{item.team}</h6>
                  <h6>{item.name}</h6>
                  {item.wait ? (
                    <button className="bg-[#F5A100] flex justify-center items-center rounded-lg w-[64px] h-8 py-1 px-3 capitalize text-base leading-6 font-medium text-white -tracking-[0.022em]">
                      wait
                    </button>
                  ) : item.go ? (
                    <button className="bg-[#02D169] flex justify-center items-center rounded-lg w-[64px] h-8 py-1 px-3 capitalize text-base leading-6 font-medium text-white -tracking-[0.022em]">
                      go
                    </button>
                  ) : (
                    <p>
                      {item.appScore?.score !== undefined &&
                        item.appScore.score.toFixed(3)}
                    </p>
                  )}
                  {item.wait || item.go ? (
                    <div />
                  ) : (
                    <div onClick={() => toggleAccordion(index)}>
                      <img
                        src={down}
                        alt="arrow"
                        className={`cursor-pointer w-6 h-6 transform object-none ${
                          open[index] ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
                {open[index] && (
                  <div className="text-white text-base font-normal p-4 leading-6 -tracking-[0.022em] border-t border-[#080915]">
                    <div className="flex justify-end items-center mb-4 gap-7">
                      <h6>
                        D:{" "}
                        {item.categoryD !== undefined &&
                          item.categoryD.toFixed(3)}
                      </h6>
                      <h6>
                        E:{" "}
                        {item.categoryE !== undefined &&
                          item.categoryE.toFixed(3)}
                      </h6>
                      <h6>
                        P:{""} {item.pen !== undefined && item.pen.toFixed(3)}
                      </h6>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <h6>App</h6>
                        <div className="flex justify-between items-center">
                          <p>
                            {item.appScore?.score !== undefined &&
                              item.appScore.score.toFixed(3)}
                          </p>
                          <div className="w-8 h-8 bg-[#0A8BEC] flex items-center justify-center ml-[22px]">
                            {item.appScore?.rank}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h6>AA</h6>
                        <div className="flex justify-between items-center">
                          <p>
                            {item.aaScore?.score !== undefined &&
                              item.aaScore.score.toFixed(3)}
                          </p>
                          <div className="w-8 h-8 bg-[#0A8BEC] flex items-center justify-center ml-[22px]">
                            {item.aaScore?.rank}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h6>Team</h6>
                        <div className="flex justify-between items-center">
                          <p>
                            {item.teamScore?.score !== undefined &&
                              item.teamScore.score.toFixed(3)}
                          </p>
                          <div className="w-8 h-8 bg-[#0A8BEC] flex items-center justify-center ml-[22px]">
                            {item.teamScore?.rank}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <h6 className="font-medium text-base leading-6 -tracking-[0.022em] text-[#FF9C07] p-3 pb-[10px]">
                  Inquiry Submitted
                </h6>
                <div className="flex justify-between items-center p-3 text-white text-base font-normal leading-6 -tracking-[0.022em]">
                  <img
                    className="w-10 h-8 object-contain"
                    src={item.icon}
                    alt={item.icon}
                  />
                  <h6 className="uppercase">{item.team}</h6>
                  <h6>{item.name}</h6>

                  <p>
                    D:{" "}
                    {item.categoryD !== undefined && item.categoryD.toFixed(3)}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default MobileLive;
