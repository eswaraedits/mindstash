import type { ReactElement } from "react"

const buttonVariants = {
  "primary":"text-md bg-purple-600 text-white  hover:bg-purple-600 ",
  "secondary":"text-md bg-purple-300 text-purple-600 rounded-lg hover:bg-purple-600"
}
const defaultStyles = "px-4 py-2 rounded-md font-light"
type buttonVariantType = "primary" | "secondary"

export interface buttonProps{
  variant:buttonVariantType,
  text:String | ReactElement, 
  startIcon?:ReactElement,
  size:"sm"|"md"|"lg",
  onClick?:()=>void
}
export const sizeStyles={
  "sm":"px-2 py-1",
  "md":"px-4 py-2",
  "lg":"px-6 py-3"
}
export const Button = (props:buttonProps)=>{
  return <button className={`${buttonVariants[props.variant]}${sizeStyles[props.size]} ${defaultStyles}`} onClick={props.onClick}>
      <div className="flex items-center gap-1">{props.startIcon}{props.text}</div>
  </button>
}