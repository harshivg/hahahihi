import React from "react";

function Vertex({ no, x, y }) {
  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  let bgColorClass;
  return (
    <div
      style={style}
      className={`
         rounded-full ${bgColorClass}  text-sm font-semibold  h-2 w-2 text-center  absolute
        bg-green-800
        
        
      `}
    >
      
    </div>
  );
}

export default Vertex;
