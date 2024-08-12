import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";

export const Items = ({ fetchCart }) => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/item/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setItems(response.data.items);
                // console.log(response)
            })
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Items
            </div>
            <div>
                <input 
                    onChange={(e) => {setFilter(e.target.value)}}
                    placeholder="Search Items"
                    type="text"
                    className="w-full px-2 py-1 border rounded-lg border-gray-300 mb-4"
                />
            </div>
            <div>
                {items.map((item) => <Item key={item._id} item={item} fetchCart={fetchCart} />)}
            </div>
        </>
    );
}

function Item({ item, fetchCart }) {
    const navigate = useNavigate();
    const id = item._id;

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {item.name[0]}
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full">
                    <div>
                        {item.name} {item.price} 
                        {/* add item info */}
                    </div>
                </div>
            </div>

            <div className="pt-2 flex">
                <Button 
                    label={"Plus"} 
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/item/addToCart/" + id,
                            {},
                            {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }
                        ).then(() => fetchCart());
                    }}
                />

                <Button 
                    label={"Minus"}
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/item/removeFromCart/" + id, 
                            {},
                            {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }
                        ).then(() => fetchCart());
                    }}
                />
            </div>
        </div>
    );
}