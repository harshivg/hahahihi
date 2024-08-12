import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setUsers(response.data.user);
                console.log(response)
            })
    }, [])

    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div>
                <input 
                    onChange={(e) => {setFilter(e.target.value)}}
                    placeholder="Search Users"
                    type="text"
                    className="w-full px-2 py-1 border rounded-lg border-gray-300 mb-4"
                />
            </div>
            <div>
                {users.map((user) => <User key={user._id} user={user} />)}
            </div>
        </>
    )
}

function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
                <div className="flex">

                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
                </div>

                <div className="pt-2">
                    <Button 
                        label={"Send money"} 
                        onClick={(e) => navigate("/send?id=" + user._id + "&name=" + user.firstName)}
                    />
                </div>

            </div>
    )
}