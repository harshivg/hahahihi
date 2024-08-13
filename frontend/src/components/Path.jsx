import React from "react";

const Path = ({ U, V }) => {
  const arr = [
    { no: 1, x: 50, y: 40 },
    { no: 2, x: 150, y: 40 },
    { no: 3, x: 270, y: 40 },
    { no: 4, x: 390, y: 40 },
    { no: 5, x: 510, y: 40 },
    { no: 6, x: 630, y: 40 },
    { no: 7, x: 750, y: 40 },
    { no: 8, x: 50, y: 140 },
    { no: 9, x: 150, y: 140 },
    { no: 10, x: 270, y: 140 },
    { no: 11, x: 390, y: 140 },
    { no: 12, x: 510, y: 140 },
    { no: 13, x: 630, y: 140 },
    { no: 14, x: 750, y: 140 },
    { no: 15, x: 50, y: 200 },
    { no: 16, x: 150, y: 260 },
    { no: 17, x: 270, y: 260 },
    { no: 18, x: 390, y: 260 },
    { no: 19, x: 510, y: 260 },
    { no: 20, x: 630, y: 260 },
    { no: 21, x: 750, y: 200 },
    { no: 22, x: 50, y: 340 },
    { no: 23, x: 150, y: 340 },
    { no: 24, x: 270, y: 340 },
    { no: 25, x: 390, y: 340 },
    { no: 26, x: 510, y: 340 },
    { no: 27, x: 630, y: 340 },
    { no: 28, x: 750, y: 340 },
  ];

  const vertex1 = arr.find((item) => item.no === U);
  const vertex2 = arr.find((item) => item.no === V);
  const { x: x1, y: y1 } = vertex1;
  const { x: x2, y: y2 } = vertex2;
  return (
    <div className="absolute z-30">
      <svg height={400} width={800}>
        <line
          x1={x1}
          y1={y1 + 5}
          x2={x2}
          y2={y2 + 5}
          stroke="red"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default Path;
