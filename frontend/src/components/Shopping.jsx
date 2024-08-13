import { useEffect, useState } from "react";
import ShortestDist from "./ShortestDist";

function Shopping({ PathList }) {
  const [curr, setCurr] = useState(28);
  const [destination, setDestination] = useState(28);
  const [ind, setInd] = useState(0);
  const n = PathList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr(destination);
      setDestination(PathList[ind]);
      setInd((prevInd) => {
        console.log(prevInd);
        return prevInd + 1;
      });
    }, 5000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000 * n);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [destination, ind, n]);
  return (
    <>
      <ShortestDist src={curr} dest={destination} />
    </>
  );
}
export default Shopping;
