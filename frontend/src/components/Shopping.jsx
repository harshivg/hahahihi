import { useEffect, useState } from "react";
import ShortestDist from "./ShortestDist";

function Shopping({ PathList, setCurritem }) {
  const [curr, setCurr] = useState(28);
  const [destination, setDestination] = useState(28);
  const [ind, setInd] = useState(0);
  const totalDuration = PathList.length * 5000;

  useEffect(() => {
    if (PathList.length === 0) return;

    const interval = setInterval(() => {
      if (ind >= PathList.length) {
        setCurr(28);
        setDestination(28);
        setCurritem("Finished");
        clearInterval(interval); // Clear interval when finished
      } else {
        setCurr(destination);
        setDestination(PathList[ind].blockNo);
        setCurritem(PathList[ind].name);
        setInd((prevInd) => prevInd + 1);
      }
    }, 5000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, totalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [PathList, ind, destination, totalDuration, setCurritem]);

  return (
    <>
      <ShortestDist src={curr} dest={destination} />
    </>
  );
}

export default Shopping;
