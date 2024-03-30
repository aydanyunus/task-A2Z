import React from "react";
import { filterTabs, mobileFilter } from "../constants/index";
import { cancel, filtericon } from "../assets";

const Filter = () => {
  return (
    <>
      <div className="mt-14 max-w-[998px] mx-auto sm:flex flex-wrap hidden md:justify-between justify-evenly gap-[20px]">
        {filterTabs.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="border-[1px] rounded-lg border-[#1A1635] bg-[#080915] flex flex-grow-0"
          >
            {group.map((tab, tabIndex) => (
              <button
                key={tabIndex}
                className={`min-w-[84px] flex justify-center items-center text-base py-3 px-4 leading-6 -tracking-[0.022em] text-center font-normal text-white ${
                  tab.selected ? "bg-[#1A1635] rounded-lg" : ""
                }
              `}
              >
                {tab.name}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="sm:hidden flex flex-col mt-6">
        <div className="flex flex-row px-4 justify-end">
          <button className="flex justify-center items-center rounded-lg px-4 py-2 bg-[#1A1635] text-white text-base -tracking-[0.022em] leading-6 font-normal">
            <img src={filtericon} alt="filter" className="mr-2 w-4 h-4" />
            Filter
          </button>
        </div>
        <div className="flex flex-wrap px-4 justify-start gap-4 w-full mt-6">
          {mobileFilter.map((filterTab, index) => (
            <div
              key={index}
              className="bg-[#0A8BEC] flex justify-center items-center rounded-full py-1 px-3 cursor-pointer"
            >
              <img src={cancel} alt="cancel" className="w-3 h-3 mr-2" />
              <p className="font-normal text-sm leading-[22px] -tracking-[0.022em] text-white">
                {filterTab.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
