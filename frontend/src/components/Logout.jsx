import { Button } from "./Button";

export const Logout = () => {
  return (
    <Button
      label="Logout"
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}
    />
  );
};
