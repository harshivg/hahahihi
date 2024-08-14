import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"

function Signin(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="bg-gradient-to-r from-slate-400 to slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">

                <div className="rounded-lg bg-white w-80 text-center h-max p-2 px-4">
                    <Heading label={"Sign In"} />
                    <SubHeading description={"Log In to your account"} />
                    <InputBox 
                        label={"Username"} 
                        placeholder={"username"} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputBox  
                        label={"Password"} 
                        placeholder={"password"} 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="pt-4">
                        <Button 
                            label={"Sign In"}
                            onClick={async () => {
                                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                    username,
                                    password
                                })
                                
                                console.log(response);
                                localStorage.setItem("token", response.data.token)

                                window.location.href = "/"
                            }}
                        />
                    </div>
                    <BottomWarning label={"Don't have an account?"} toText={"Sign Up"} to={"/signup"} />

                </div>
            </div>
        </div>
    )
}

export default Signin