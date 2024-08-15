import { useEffect, useState } from "react";
import { EmptySpaceCol, EmptySpaceRow } from "./EmptySpace.jsx";
import { ItemSectionRow, ItemSectionCol } from "./ItemSection.jsx";
import Section from "./Sections.jsx";
import Graph from "./Graph.jsx";
import ShortestDist from "./ShortestDist.jsx";

function Map({cart}) {
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

  let longSide = screenWidth / 8;
  let shortSide = longSide / 4;
  longSide*=1.5;

  const [SectionNo, setSectionNo] = useState(1);
  return (
    <>
      <div className="relative">  
        <div className="absolute">
          <Graph cart={cart} />
        </div>
        <div className="border-2 border-black flex h-auto absolute">
          <div>
            <div className="flex">
              <div>
                {Array.from({ length: 3 }, (_, index) => (
                  <ItemSectionRow
                    key={index}
                  />
                ))}
              </div>
              <div>
                <div className="flex  ">
                  {Array.from({ length: 6 }, (_, index) => (
                    <ItemSectionCol key={index} />
                  ))}
                </div>
                <div className="flex ">
                  {Array.from({ length: 6 }, (_, index) => (
                    <EmptySpaceCol key={index} />
                  ))}
                </div>
                <div className="flex">
                  {Array.from({ length: 6 }, (_, index) => (
                    <Section key={index} />
                  ))}
                  <div className=" w-full ">
                    {Array.from({ length: 2 }, (_, index) => (
                      <EmptySpaceRow key={index} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex w-full ">
                    {Array.from({ length: 6 }, (_, index) => (
                      <EmptySpaceCol key={index} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {Array.from({ length: 3 }, (_, index) => (
                  <ItemSectionRow key={index} />
                ))}
              </div>
            </div>
            <div className="flex w-full ">
              {Array.from({ length: 5 }, (_, index) => (
                <ItemSectionCol key={index}  />
              ))}
              <div className="
              bg-blue-500"  style={{
                width: `${longSide}px`,
                height: `${shortSide}px`,
              }}>
                <p className="text-center font-bold"
               
                >GATE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Map;
