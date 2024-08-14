export function Button({label, onClick}){
    return (
        <button 
            type="button" 
            className="text-white bg-black hover:bg-gray-800 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 w-full"
            onClick={onClick}
        >
            {label}
        </button>
    )
}