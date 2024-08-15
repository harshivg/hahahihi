import React from "react";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
function Vertex({ no, x, y, type }) {
  
  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <div
      style={style}
      className={`
         rounded-full  text-sm 
         font-semibold  h-2 w-2 text-center  absolute
         z-50 text-gray-300
      
      `}
    >
      {type >= 28 && type < 100 && <p className="text-[10px] ">{no}</p>}
      {type === 100 && <FaPerson className="lg:size-10 md:size-5 sm:size-2 z-100" />}
      {type == 101 && (
        <MdOutlineProductionQuantityLimits className="lg:size-10 md:size-5 sm:size-2 z-100" />
      )}
    </div>
  );
}

export default Vertex;
