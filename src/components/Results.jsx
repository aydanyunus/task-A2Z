import React from "react";
import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { tableHead } from "../constants";

const Results = () => {
  const { activeTabContent } = useContext(TabContext);

  return (
    <div className="mt-24 sm:flex hidden">
      <table className="w-full border-separate border-spacing-0-8">
        <thead>
          <tr>
            {tableHead.map((thead, index) => (
              <th
                key={index}
                className={`${
                  index >= 4 ? "text-center" : "text-left"
                } text-white font-normal text-base leading-6 -tracking-[0.022em] pb-12`}
              >
                {thead.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activeTabContent &&
            activeTabContent?.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr className="text-white font-normal text-base leading-6 -tracking-[0.022em]">
                  <td className="text-left">
                    <div className=" w-8 h-8 bg-[#0A8BEC] flex items-center justify-center">
                      {item.rank}
                    </div>
                  </td>
                  <td className="text-left">
                    <div className="flex items-center uppercase justify-start">
                      <img
                        className="w-5 h-[14px] mr-2"
                        src={item.image.path}
                        alt={item.image.alt_text}
                      />
                      {item.team}
                    </div>
                  </td>
                  <td className="text-left">{item.bib}</td>
                  <td className="text-left">{item.name}</td>
                  <td className="text-center text-[#C4C4C4]">
                    {item.categoryD}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {item.categoryE}
                  </td>
                  <td className="text-center text-[#C4C4C4]">{item.pen}</td>
                  <td
                    className={`text-center ${
                      index >= 2 ? "text-[#FF9C07]" : "text-[#C4C4C4]"
                    }`}
                  >
                    {item.total}
                  </td>
                </tr>
                <tr className="text-white font-normal text-base leading-6 -tracking-[0.022em]">
                  <td colSpan="4"></td>
                  <td className="text-center text-[#C4C4C4]">
                    {item.categoryD}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {item.categoryE}
                  </td>
                  <td className="text-center text-[#C4C4C4]">{item.pen}</td>
                  <td className="text-center text-[#C4C4C4]">{item.total}</td>
                </tr>
                <tr className="text-white font-normal text-base leading-6 -tracking-[0.022em]">
                  <td colSpan={`${index === 0 ? "7" : "6"}`}></td>
                  <td
                    className={`text-center text-[#C4C4C4] ${
                      index === 0 ? "hidden" : ""
                    }`}
                  >
                    Score
                  </td>
                  <td className="text-center text-[#FF9C07]">{item.total}</td>
                </tr>
                <tr>
                  <td colSpan="8">
                    <div className={`h-[1px] w-full bg-gradient mb-4 mt-4 ${index === 6 ? 'hidden': ''}`} />
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
