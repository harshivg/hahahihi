import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

export const Items = ({ fetchCart }) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
    const [debouncedFilter, setDebouncedFilter] = useState(filter);

    useEffect(() => {
        // Set a timeout to update the debounced filter after a delay
        const handler = setTimeout(() => {
            setDebouncedFilter(filter);
        }, 500); // 500ms debounce delay

        // Clear the timeout if the effect is about to re-run (on filter change)
        return () => {
            clearTimeout(handler);
        };
    }, [filter]);

    useEffect(() => {
        axios.get("https://shoppy-mart-ochre.vercel.app/item/bulk?filter=" + debouncedFilter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setItems(response.data);
            });
    }, [debouncedFilter]);


  return (
    <>
      <div className="font-bold text-[2rem] flex justify-center mb-2">Items</div>
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <CiSearch className="text-gray-500" />
        </span>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Search Items"
          type="text"
          className="w-full pl-8 pr-2 py-1 border rounded-lg border-black bg-white outline-none"
        />
      </div>
      <div className="h-96 overflow-y-auto no-scrollbar px-2">
        {/* Adjust height as needed */}
        <div className="flex justify-between border-b border-gray-500 py-4 font-bold">
          <div className="w-1/3 text-[1.2rem]">Item</div>
          <div className="w-1/3 text-[1.2rem]">Price</div>
          <div className="w-1/3"></div>
        </div>
        {items.map((item) => (
          <Item key={item._id} item={item} fetchCart={fetchCart} />
        ))}
      </div>
    </>
  );
};


function Item({ item, fetchCart }) {
  const id = item._id;

  return (
    <div className="flex justify-between py-4 border-b border-gray-500">
      <div className="w-1/3 text-[1.1rem]">{item.name}</div>
      <div className="w-1/3 text-[1.1rem]">₹{item.price}</div>
      <div className="w-1/3 flex">
        <Button
        label={"Add"}
          onClick={() => {
            axios
              .post(
                "https://shoppy-mart-ochre.vercel.app/item/addToCart/" + id,
                {},
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(() => fetchCart());
          }}
        />
        <Button
          label={"Remove"}
          onClick={() => {
            axios
              .post(
                "https://shoppy-mart-ochre.vercel.app/item/removeFromCart/" + id,
                {},
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(() => fetchCart());
          }}
        />
      </div>
    </div>
  );
}
