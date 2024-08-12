import { Link } from "react-router-dom";

export function BottomWarning({label, toText, to}){
    return (
        <div className="py-2 text-sm justify-center">
            <div>
                {label}
            <Link to={to} className="cursor-pointer underline pl-1 fond-md">
                {toText}
            </Link>
            </div>
        </div>
    )
}