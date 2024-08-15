


import { useEffect, useState } from "react";

function EmptySpaceCol() {
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

  return (
    <>
    <div style={{
        width: `${longSide}px`,
        height: `${shortSide}px`,
      }}>
    </div>
    </>
    
)
}

function EmptySpaceRow() {
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

  return (
    <>
    <div style={{
        width: `${shortSide}px`,
        height: `${longSide}px`,
      }}>
    </div>
    </>
)
}


export {EmptySpaceCol,EmptySpaceRow};