export function InputBox({title,type,link,onChange,ref}){
    return <div>
            <div className="text-gray-200 text-left text-lg py-2">{title}:</div>
            <input ref={ref} className="px-2 py-2 mb-1  w-full rounded-lg border-1 text-slate-100 border-slate-800 " type={type} placeholder={link} onChange={onChange}/>
        </div>
}
