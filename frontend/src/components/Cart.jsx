import React from "react";

export const Cart = ({ cart, total }) => {
    const discount = 5;

    return (
        <div>
            <div className="font-bold text-2xl mb-4">Cart</div>
            <div className="flex justify-between">
                <div className="w-2/3">
                    <div className="flex justify-between border-b-2 border-gray-300 py-4">
                        <div className="w-1/2">Item</div>
                        <div className="w-1/4">Quantity</div>
                        <div className="w-1/4">Price</div>
                    </div>
                    {
                        cart.map((item) => 
                            <CartItem key={item._id} item={item} />
                        )
                    }
                </div>
                <div className="w-1/3">
                    <div className="border-2 border-gray-300 p-4">
                        <div className="flex justify-between">
                            <div>Subtotal</div>
                            <div>{total}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Discount</div>
                            <div>{discount}%</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Total</div>
                            <div>{total - (discount*total)/100}</div>
                        </div>
                        <div className="mt-4">
                            <button className="bg-slate-500 text-white px-4 py-2 rounded">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CartItem ({ item }) {
    return (
        <div className="flex justify-between border-b-2 border-gray-300 py-4">
            <div className="w-1/2">{item.name}</div>
            <div className="w-1/4">{item.quantity}</div>
            <div className="w-1/4">{item.price}</div>
        </div>
    );
}