import React, { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { liveTableHead } from "../constants";

const Live = () => {
  const { activeTabContent } = useContext(TabContext);

  return (
    <div className="mt-24 sm:flex hidden">
      <table className="w-full border-separate border-spacing-0-16 live">
        <thead>
          <tr>
            <td colSpan="9" />
            {liveTableHead.map((thead, index) => (
              <th
                key={index}
                className="text-center text-white font-normal text-base leading-6 -tracking-[0.022em] pb-12"
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
                  {item.submitted ? (
                    <td
                      colSpan="2"
                      className="text-[#FF9C07] text-xl leading-6"
                    >
                      Inquiry Submitted
                    </td>
                  ) : (
                    ""
                  )}
                  <td className="text-left">
                    <div>
                      <img
                        className="w-12 h-8 object-contain"
                        src={item.icon}
                        alt={item.icon}
                      />
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
                  {item.categoryD && item.categoryE && item.pen ? (
                    <>
                      <td className="text-left">
                        <span>
                          D:{" "}
                          {item.categoryD !== undefined &&
                            item.categoryD.toFixed(3)}
                        </span>
                      </td>
                      <td className="text-left">
                        <span>
                          E:{" "}
                          {item.categoryE !== undefined &&
                            item.categoryE.toFixed(3)}
                        </span>
                      </td>
                      <td className="text-left">
                        <span>P: {item.pen}</span>
                      </td>
                    </>
                  ) : (
                    ""
                  )}
                  {item.appScore && item.aaScore && item.teamScore ? (
                    <>
                      {!item.submitted ? (
                        <td colSpan="2"></td>
                      ) : (
                        ""
                      )}

                      {["appScore", "aaScore", "teamScore"].map((scoreType) => (
                        <td key={scoreType} className="text-center">
                          <div className="flex items-center justify-center">
                            {item[scoreType].score !== undefined &&
                              item[scoreType].score.toFixed(3)}
                            <div className="w-8 h-8 bg-[#0A8BEC] flex items-center justify-center ml-3">
                              {item[scoreType].rank}
                            </div>
                          </div>
                        </td>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                  {item.wait ? (
                    <td className="text-left">
                      <button className="bg-[#F5A100] flex justify-center items-center rounded-lg w-[95px] h-8 py-1 px-3 capitalize text-base leading-6 font-medium text-white -tracking-[0.022em]">
                        wait
                      </button>
                    </td>
                  ) : item.go ? (
                    <td className="text-left">
                      <button className="bg-[#02D169] flex justify-center items-center rounded-lg w-[95px] h-8 py-1 px-3 capitalize text-base leading-6 font-medium text-white -tracking-[0.022em]">
                        go
                      </button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>

                <tr>
                  <td colSpan="12">
                    <div
                      className={`h-[1px] w-full bg-gradient mb-4 mt-4 ${
                        index === 6 ? "hidden" : ""
                      }`}
                    />
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Live;
