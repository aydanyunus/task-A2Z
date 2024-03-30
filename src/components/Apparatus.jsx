import React from "react";
import { icons } from "../constants";

const Apparatus = () => {
  return (
    <div className="mt-12 max-w-[655px] mx-auto sm:flex hidden justify-between">
      {icons.map((icon,index) => (
        <img
          key={icon.id}
          src={icon.img}
          alt="icon"
          className={`w-14 h-14 object-none ${index === 0 ? 'ml-0': 'ml-14'}`}
        />
      ))}
    </div>
  );
};

export default Apparatus;
