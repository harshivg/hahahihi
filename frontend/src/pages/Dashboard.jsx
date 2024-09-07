import { useState, useEffect, useRef } from "react";
import { Appbar } from "../components/Appbar";
import { Cart } from "../components/Cart";
import { Items } from "../components/Items";
import axios from "axios";
import { Button } from "../components/Button";
import Map from "../components/Map";
import Carousel from "../components/Carousel";
import {baseUrl} from "../components/config/config";

export const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [curritem, setCurritem] = useState("Wait");
  const [showCart, setshowCart] = useState(false);
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

  let longSide = screenWidth / 2;
  const fetchCart = () => {
    axios
      .get(`${baseUrl}/api/item/cart`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const items = response.data.items;
        setCart(items);
        console.log(response)
        // Calculate total
        const calculatedTotal = items.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        setTotal(calculatedTotal);
      })
      .catch((error) => {
        console.error("Error fetching cart items", error);
      });
  };
  cart.sort((a, b) => a.blockNo - b.blockNo);
  const [PathList, setPathList] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const bottomComponentRef = useRef(null);

  const scrollToBottom = () => {
    bottomComponentRef.current.scrollIntoView({ behavior: "smooth" });
    setPathList(cart);
  };

  return (
    <>
      <div className="w-full h-full bg-black">
        <Appbar />
        <div className="h-full w-full mt-10">
          <div className="flex mx-8 items-center bg-yellow-500 rounded-lg justify-between">
            <div className="p-3 w-[54rem] ml-2">
              {showCart ? (
                <Cart
                  cart={cart}
                  scrollToBottom={scrollToBottom}
                  total={total}
                />
              ) : (
                <Items fetchCart={fetchCart} />
              )}
              <Button
                label={!showCart ? "Cart" : "Items"}
                onClick={() => setshowCart(!showCart)}
              />
            </div>
            <div className="w-[30rem] h-[35rem] p-5">
              <Carousel />
              <div className="m-4">
                <Button label="Start" onClick={scrollToBottom} />
              </div>
            </div>
          </div>

          <div
            ref={bottomComponentRef}
            className="p-5 mt-16 "
            style={{
              height: `${longSide}px`,
              marginLeft: `${longSide / 10}px`,
            }}
          >
            <Map cart={PathList} setCurritem={setCurritem} />
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <button
            className="bg-red-400 p-2 border-2 border-red-700 text-xl font-bold text-blue-950  "
            style={{
              height: `${70}px`,
            }}
          >
            Go and Pick : {curritem}
          </button>
        </div>
      </div>
    </>
  );
};
