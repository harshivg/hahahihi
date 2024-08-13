import React from "react";

function Vertex({ no, x, y, }) {
  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  let bgColorClass;
  return (
    <div
      style={style}
      className={`
        p-3 rounded-full ${bgColorClass}  text-3xl font-semibold  h-16 w-16 text-center  absolute
      `}
    >
        
      
    </div>
  );
}

export default Vertex;