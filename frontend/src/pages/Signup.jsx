import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../components/config/config";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [valid, setValid] = useState(1);
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 px-4 h-max">
          <Heading label={"Sign Up"} />
          <SubHeading description={"Create an account"} />
          {valid == 0 && (
            <div className="text-red-800 font-bold text-xl">
              {" "}
              Invalid Inputs
            </div>
          )}
          {valid == -1 && (
            <div className="text-red-800 font-bold text-xl">
              User already exists
            </div>
          )}
          <InputBox
            label={"First Name"}
            placeholder={"Harsh"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Singh"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            label={"Email"}
            placeholder={"harsh@gmail.com"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={"min 6 words"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-4">
            <Button
              label={"Sign Up"}
              onClick={async () => {
                const response = await axios.post(`${baseUrl}/user/signup`, {
                  firstName,
                  lastName,
                  username,
                  password,
                });

                console.log(response);
                if (response.data.check == 1) window.location.href = "/";
                else {
                  setValid(response.data.check);
                }
              }}
            />
            <BottomWarning
              label={"Already have an account?"}
              toText={"Sign In"}
              to={"/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
