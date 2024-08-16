export function InputBox({label, placeholder, onChange, type}){
    return (
        <div>
            <div className="text-sm text-left pt-2">
                {label}
            </div>
            <input 
                placeholder={placeholder} 
                className="border-2 border-gray-300 rounded-md w-full px-2"
                onChange={onChange}
                type={type}
            />
        </div>
    )
}