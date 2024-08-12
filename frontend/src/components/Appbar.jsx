export const Appbar = () => {
    return (
        <div className="bg-slate-500 text-white h-16 flex items-center justify-between px-4">
            <div className="font-bold text-2xl">
                Dashboard
            </div>
            <div>
                <button className="bg-slate-400 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
        </div>
    )
}