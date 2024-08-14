import React from "react";
import { Button } from "./Button";
import { useState } from "react";

export const Cart = ({ cart, total, scrollToBottom }) => {
  const discount = 5;
  const [showCart, setshowCart] = useState(false);
  const handleShowCart = () => {
    setshowCart(!showCart);
  }

  return (
    <div className="h-[30.8rem]">
      <div className="relative mb-4">
        <div className="font-bold text-[2rem] flex justify-center border-b border-gray-500">Cart</div>
        <div className="absolute right-2 top-3 hover:cursor-pointer" onClick={() => handleShowCart()}>
            <img src="./images/showAmnt.svg" alt="showAmount" className="h-[1.8rem]" />
        </div>
      </div>
      <div className="flex justify-between">
        {showCart === false && (
          <div className="w-full h-96 overflow-y-auto no-scrollbar px-2">
            {" "}
            {/* Adjust height as needed */}
            <div className="flex justify-between border-b border-gray-500 py-4 font-bold">
              <div className="w-1/2 text-[1.2rem]">Item</div>
              <div className="w-1/4 text-[1.2rem]">Quantity</div>
              <div className="w-1/4 text-[1.2rem]">Price</div>
            </div>
            {cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        )}
        {showCart === true && (
          <div className="w-full mt-6">
            <div className="border border-gray-500 p-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>₹{total}</div>
              </div>
              <div className="flex justify-between">
                <div>Discount</div>
                <div>{discount}%</div>
              </div>
              <div className="flex justify-between">
                <div>Total</div>
                <div>₹{total - (discount * total) / 100}</div>
              </div>
              <div className="mt-4">
                <button className="bg-black text-white px-4 py-2 rounded">
                  Checkout
                </button>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

function CartItem({ item }) {
  return (
    <div className="flex justify-between border-b border-gray-500 py-4">
      <div className="w-1/2">{item.name}</div>
      <div className="w-1/4">{item.quantity}</div>
      <div className="w-1/4">₹{item.price}</div>
    </div>
  );
}
