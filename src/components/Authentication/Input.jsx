

const Input = ({type,placeholder,name,value,onchange,onfocus,error})=>{

    return(
        <>
        <div>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onchange} onFocus={onfocus} required className="w-full px-4 py-2 bg-slate-100 mb-4" />
        </div>
        {error&&(<span className="text-red-600 text-sm w-[200px]">{error}</span> )}
        </>
    )
}

export default Input;