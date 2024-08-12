import React from "react";

const Path = ({ U, V }) => {
    const arr = [
        { no: 1, x: 50, y: 70 },
        { no: 2, x: 180, y: 70 },
        { no: 3, x: 330, y: 70 },
        { no: 4, x: 480, y: 70 },
        { no: 5, x: 620, y: 70 },
        { no: 6, x: 780, y: 70 },
        { no: 7, x: 900, y: 70 },
        { no: 8, x: 50, y: 190 },
        { no: 9, x: 180, y: 190 },
        { no: 10, x: 330, y: 190 },
        { no: 11, x: 480, y: 190 },
        { no: 12, x: 620, y: 190 },
        { no: 13, x: 780, y: 190 },
        { no: 14, x: 900, y: 190 },
        { no: 15, x: 50, y: 320 },
        { no: 16, x: 180, y: 320 },
        { no: 17, x: 330, y: 320 },
        { no: 18, x: 480, y: 320 },
        { no: 19, x: 620, y: 320 },
        { no: 20, x: 780, y: 320 },
        { no: 21, x: 900, y: 320 },
        { no: 22, x: 50, y: 440 },
        { no: 23, x: 180, y: 440 },
        { no: 24, x: 330, y: 440 },
        { no: 25, x: 480, y: 440 },
        { no: 26, x: 620, y: 440 },
        { no: 27, x: 780, y: 440 },
        { no: 28, x: 900, y: 440 },
    ];
    const vertex1 = arr.find(item => item.no === U);
    const vertex2 = arr.find(item => item.no === V);
    const { x: x1, y: y1 } = vertex1;
    const { x: x2, y: y2 } = vertex2;
    return (
        <div className="absolute z-30">
            <svg height={800} width={900}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="5" />
            </svg>
        </div>
    );
};

export default Path;
