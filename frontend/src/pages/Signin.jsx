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
  const [valid,setValid]= useState(1);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center h-max p-2 px-4">
          <Heading label={"Sign In"} />
          <SubHeading description={"Log In to your account"} />
          {valid===0 && <div className="text-red-800 text-xl font-bold" >Invalid Credential </div>}
          <InputBox
            label={"Username"}
            placeholder={"username"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
          />

          <div className="pt-4">
            <Button
              label={"Sign In"}
              onClick={async () => {
                const response = await axios.post(`${baseUrl}/user/signin`, {
                  username,
                  password,
                });

                console.log(response);
                if(response.data.check == 1)
                    window.location.href = "/dashboard";
                else
                  setValid(0);
                  

                
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
      </div>
    </div>
  );
}

export default Signin;
