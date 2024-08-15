import { useEffect, useState } from "react";

function ItemSectionRow() {
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
    <div
      className="border-2 border-green-800 bg-green-600"
      style={{
        width: `${shortSide}px`,
        height: `${longSide}px`,
      }}
    ></div>
  );
}

function ItemSectionCol() {
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
    <div
      className="border-2 border-green-800 bg-green-600"
      style={{
        width: `${longSide}px`,
        height: `${shortSide}px`,
      }}
    ></div>
  );
}

export { ItemSectionRow, ItemSectionCol };
