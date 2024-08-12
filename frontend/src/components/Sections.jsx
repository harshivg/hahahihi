import { EmptySpaceRow } from "./EmptySpace";
import { ItemSectionRow } from "./ItemSection";

function Section({Section,setSectionNo}){
    return (
        <>
            <div className=" w-full ">
                {Array.from({ length: 2 }, (_, index) => (
                  <EmptySpaceRow key={index} Section={Section}
                  setSectionNo={setSectionNo} />
                ))}
              </div>
              <div className=" w-full ">
                {Array.from({ length: 2 }, (_, index) => (
                  <ItemSectionRow key={index} Section={Section}
                  setSectionNo={setSectionNo} />
                ))}
              </div>
        </>
    )
}
export default Section;