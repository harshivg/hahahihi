import { Logout } from "./Logout"

export const Appbar = () => {
    return (
        <div className="bg-slate-500 text-white h-16 flex items-center justify-between px-4">
            <div className="font-bold text-2xl">
                Shopsavvy
            </div>
            <div>
                <Logout />
            </div>
        </div>
    )
}