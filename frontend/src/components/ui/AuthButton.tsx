export const AuthButton = ({label,onPress})=>{

return(
  <div>
    <button onClick={onPress} className=" motion-preset-pop motion-scale-in-[0.5] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-duration-[0.92s]/blur relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full  mt-3">
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center text-center rounded-full bg-gray-800 px-3 py-1 text-lg font-medium text-gray-100 backdrop-blur-3xl ">
        {label}
      </span>
    </button>
  </div>)
}