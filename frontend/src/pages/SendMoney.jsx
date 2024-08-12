import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";

function SendMoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0)

    return (
        <div className="justify-center flex h-screen items-center bg-slate-100">
            <div className="flex flex-col bg-white items-left justify-center p-6 rounded-lg shadow-lg">

                <Heading label={"Send Money"} />
                <SubHeading description={"Send money to " + name} />
                <div className="w-full max-w-md">
                        <div className="mb-6">
                            <InputBox label={"Amount"} placeholder={"300"} onChange={(e) => setAmount(e.target.value)}/>
                        </div>
                        <Button 
                            label={"Send"}
                            onClick={() => {
                                axios.post("http://localhost:3000/api/v1/account/transfer", {
                                    to: id,
                                    amount
                                },
                                {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token")
                                    }
                                }
                            )
                            }}
                        />
                </div>
            </div>
        </div>
    )
}

export default SendMoney