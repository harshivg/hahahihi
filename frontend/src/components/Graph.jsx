import React from 'react';
import Vertex from './Vertex';
import ShortestDist from './ShortestDist';

function Graph() {
    const arr = [
        { no: 1, x: 50, y: 30 },
        { no: 2, x: 180, y: 30 },
        { no: 3, x: 330, y: 30 },
        { no: 4, x: 480, y: 30 },
        { no: 5, x: 620, y: 30 },
        { no: 6, x: 780, y: 30 },
        { no: 7, x: 900, y: 30 },
        { no: 8, x: 50, y: 150 },
        { no: 9, x: 180, y: 150 },
        { no: 10, x: 330, y: 150 },
        { no: 11, x: 480, y: 150 },
        { no: 12, x: 620, y: 150 },
        { no: 13, x: 780, y: 150 },
        { no: 14, x: 900, y: 150 },
        { no: 15, x: 50, y: 280 },
        { no: 16, x: 180, y: 280 },
        { no: 17, x: 330, y: 280 },
        { no: 18, x: 480, y: 280 },
        { no: 19, x: 620, y: 280 },
        { no: 20, x: 780, y: 280 },
        { no: 21, x: 900, y: 280 },
        { no: 22, x: 50, y: 400 },
        { no: 23, x: 180, y: 400 },
        { no: 24, x: 330, y: 400 },
        { no: 25, x: 480, y: 400 },
        { no: 26, x: 620, y: 400 },
        { no: 27, x: 780, y: 400 },
        { no: 28, x: 900, y: 400 },
           
    ];

    return (
        <>
            {arr.map((item, ind) => (
                <Vertex key={ind} no={item.no} x={item.x} y={item.y} />
            ))}
            <ShortestDist src={12} dest={19} />
        </>
    );
}

export default Graph;
