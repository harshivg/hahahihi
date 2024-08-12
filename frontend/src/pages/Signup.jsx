import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"

function Signup(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">

                <div className="rounded-lg bg-white w-80 text-center p-2 px-4 h-max">
                    <Heading label={"Sign Up"} />
                    <SubHeading description={"Create an account"} />

                    <InputBox
                        label={"First Name"} 
                        placeholder={"Harshiv"} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputBox 
                        label={"Last Name"} 
                        placeholder={"Ganwani"} 
                        onChange={(e) => setLastName(e.target.value)}

                    />
                    <InputBox 
                        label={"Email"} 
                        placeholder={"harshiv@gmail.com"}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <InputBox 
                        label={"Password"} 
                        placeholder={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <div className="pt-4">
                        <Button 
                            label={"Sign Up"}
                            onClick={() => {
                                axios.post("http://localhost:3000/api/v1/user/signup", {
                                    firstName,
                                    lastName,
                                    username,
                                    password
                                })
                            }}
                        />
                        <BottomWarning label={"Already have an account?"} toText={"Sign In"} to={"/signin"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup