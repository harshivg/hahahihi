import { Button } from "./Button"

export const Logout = () => {
    return (
        <Button label="Logout" onClick={() => {localStorage.removeItem("token")}} />

        //redirect to signin page
    )
}