import React, { useEffect, useState } from "react";

const Path = ({ U, V }) => {
  const arr = [
    { no: 1, x: 50, y: 40 },
    { no: 5, x: 150, y: 40 },
    { no: 9, x: 270, y: 40 },
    { no: 13, x: 390, y: 40 },
    { no: 17, x: 510, y: 40 },
    { no: 21, x: 630, y: 40 },
    { no: 25, x: 750, y: 40 },
    { no: 2, x: 50, y: 140 },
    { no: 6, x: 150, y: 140 },
    { no: 10, x: 270, y: 140 },
    { no: 14, x: 390, y: 140 },
    { no: 18, x: 510, y: 140 },
    { no: 22, x: 630, y: 140 },
    { no: 26, x: 750, y: 140 },
    { no: 3, x: 50, y: 200 },
    { no: 7, x: 150, y: 260 },
    { no: 11, x: 270, y: 260 },
    { no: 15, x: 390, y: 260 },
    { no: 19, x: 510, y: 260 },
    { no: 23, x: 630, y: 260 },
    { no: 27, x: 750, y: 200 },
    { no: 4, x: 50, y: 340 },
    { no: 8, x: 150, y: 340 },
    { no: 12, x: 270, y: 340 },
    { no: 16, x: 390, y: 340 },
    { no: 20, x: 510, y: 340 },
    { no: 24, x: 630, y: 340 },
    { no: 28, x: 750, y: 340 },
  ];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let changed= 1024/screenWidth;
  const vertex1 = arr.find((item) => item.no === U);
  const vertex2 = arr.find((item) => item.no === V);
  const { x: x1, y: y1 } = vertex1;
  const { x: x2, y: y2 } = vertex2;
  return (
    <div className="absolute z-30">
      <svg height={screenWidth/2} width={screenWidth}>
        <line
          x1={x1/changed}
          y1={(y1 + 5)/changed}
          x2={x2/changed}
          y2={(y2 + 5)/changed}
          stroke="red"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default Path;
