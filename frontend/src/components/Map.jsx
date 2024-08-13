import { useState } from "react";
import { EmptySpaceCol, EmptySpaceRow } from "./EmptySpace.jsx";
import { ItemSectionRow, ItemSectionCol } from "./ItemSection.jsx";
import Section from "./Sections.jsx";
import Graph from "./Graph.jsx";
import ShortestDist from "./ShortestDist.jsx";

function Map() {
  const [SectionNo, setSectionNo] = useState(1);
  return (
    <>
      <div className="absolute">
        <div className="relative">
          <Graph />
        </div>
        <div className="border-2 border-black  flex  h-auto ">
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
                <div className="flex w-full ">
                  {Array.from({ length: 6 }, (_, index) => (
                    <ItemSectionCol key={index} />
                  ))}
                </div>
                <div className="flex w-full ">
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
              <div className="h-8 w-[192px] bg-green-500">
                <p className="text-center font-bold text-3xl">GATE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Map;
