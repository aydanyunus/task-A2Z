import { useContext } from "react";
import { tabs } from "../constants";
import { TabContext } from "../context/TabContext";

const Tabs = () => {
  const { activeTab, handleTabClick } = useContext(TabContext);

  return (
    <div className="mt-12">
      <ul className="sm:overflow-hidden overflow-x-scroll flex border-b-[#1A1635] border-b-[1px] items-start justify-between text-white font-light text-[20px] leading-7 text-center -tracking-[0.022em]">
        {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={`flex flex-1 sm:min-w-min min-w-[148px] items-center justify-center sm:pb-6 pb-4 cursor-pointer sm:text-xl text-base sm:leading-7 leading-6 font-light text-center -tracking-[0.022em] ${
                activeTab === index ? "border-b-2 border-[#0A8BEC] " : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {index === 0 ? (
                <div className="bg-[#FB0000] w-2 h-2 rounded-full mr-[6px]" />
              ) : (
                ""
              )}
              {tab.name}
            </li>
        ))}
      </ul>
    </div>
  );
};



export default Tabs;
