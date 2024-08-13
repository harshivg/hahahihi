import { useState, useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Cart } from "../components/Cart";
import { Items } from "../components/Items";
import axios from "axios";
import { Button } from "../components/Button";

export const Dashboard = ()  => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const [showCart, setshowCart] = useState(false);

    const fetchCart = () => {
        axios.get("http://localhost:3000/api/v1/item/cart", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            const items = response.data.items;
            setCart(items);

            // Calculate total
            const calculatedTotal = items.reduce((acc, item) => {
                return acc + (item.price * item.quantity);
            }, 0);
            setTotal(calculatedTotal);
        })
        .catch((error) => {
            console.error("Error fetching cart items", error);
        });
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8 w-1/4">

            {showCart ? 
                <Cart cart={cart} total={total} />
                :
                <Items fetchCart={fetchCart} />
            }

            <Button 
                label={!showCart ? "Cart" : "Items"}
                onClick={() => setshowCart(!showCart)}/>
            </div>
        </div>
    );
}
