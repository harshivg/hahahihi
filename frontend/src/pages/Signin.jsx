import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { baseUrl } from "../components/config/config";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(1);

  return (

        <div className="rounded-lg bg-white w-full h-[28rem] text-center p-2 flex flex-col">
          <Heading label={"Sign In"} />
          <SubHeading description={"Log In to your account"} />
          {valid === 0 && (
            <div className="text-red-800 text-xl font-bold">
              Invalid Credential{" "}
            </div>
          )}
          <div className="flex flex-col items-start px-3 gap-1 mb-3">
            <p>Username</p>
            <input type="text" name="username" placeholder="username" className="border border-gray-400 w-full rounded-md p-2 outline-none" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col items-start px-3 gap-1 mb-5">
            <p>Password</p>
            <input type="password" name="password" placeholder="password" className="border border-gray-400 w-full rounded-md p-2 outline-none" onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <div className="pt-4">
            <Button
              label={"Sign In"}
              onClick={async () => {
                const response = await axios.post(
                  `${baseUrl}/api/user/signin`,
                  {
                    username,
                    password,
                  }
                );

                console.log(response);
                if (response.data.check == 1)
                  window.location.href = "/dashboard";
                else setValid(0);

                localStorage.setItem("token", response.data.token);
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            toText={"Sign Up"}
            to={"/signup"}
          />
        </div>

  );
}

export default Signin;
