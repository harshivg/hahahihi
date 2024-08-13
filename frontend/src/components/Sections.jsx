import { EmptySpaceRow } from "./EmptySpace";
import { ItemSectionRow } from "./ItemSection";

function Section() {
  return (
    <>
      <div className=" w-full ">
        {Array.from({ length: 2 }, (_, index) => (
          <EmptySpaceRow key={index} />
        ))}
      </div>
      <div className=" w-full ">
        {Array.from({ length: 2 }, (_, index) => (
          <ItemSectionRow key={index} />
        ))}
      </div>
    </>
  );
}
export default Section;
