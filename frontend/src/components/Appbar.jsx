import { Logout } from "./Logout"

export const Appbar = () => {
    return (
        <div className="text-black h-16 flex items-center justify-between px-8 border-b-2 bg-green-50">
            <div className="text-2xl flex items-center gap-1">
                <img src="./images/navLogo.svg" alt="navLogo" className="h-[2rem] mr-1" />
                <div className="h-[2rem] border border-3 border-slate-400 "></div>
                ShoppyMart
            </div>
            <div className="pt-2">
                <Logout />
            </div>
        </div>
    )
}