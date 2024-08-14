import { useState, useEffect, useRef } from "react";
import { Appbar } from "../components/Appbar";
import { Cart } from "../components/Cart";
import { Items } from "../components/Items";
import axios from "axios";
import { Button } from "../components/Button";
import Map from "../components/Map";
import Carousel from "../components/Carousel";

export const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [showCart, setshowCart] = useState(false);

  const fetchCart = () => {
    axios
      .get("http://localhost:3000/api/v1/item/cart", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const items = response.data.items;
        setCart(items);

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

  useEffect(() => {
    fetchCart();
  }, []);

  const bottomComponentRef = useRef(null);

  const scrollToBottom = () => {
    bottomComponentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-[100rem] bg-black">
        <Appbar />
        <div className="h-full w-full mt-10">
          <div className="flex mx-8 items-center bg-yellow-500 rounded-lg">
            <div className="p-3 w-[50rem]">
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
            <div className="w-[28rem] h-[35rem] p-5">
              <Carousel />
              <div className="m-4">
                <Button label="Start" onClick={scrollToBottom} />
              </div>
            </div>
          </div>

          <div ref={bottomComponentRef} className="p-5 ml-[15rem] mt-16 ">
            <Map cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};
