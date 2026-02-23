import  { useEffect, type RefObject } from "react";

export function useClickOutSide(menuRef:RefObject<HTMLInputElement | null>,onClose:()=>void) {
    useEffect(()=>{
        const handleOutSideClick = (event:MouseEvent)=>{
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                onClose()
            }
        }
        const handleEscape = (event:KeyboardEvent)=>{
            if(event.key==="Escape"){
                onClose()
            }
        }
        document.addEventListener("mousedown",handleOutSideClick)
        document.addEventListener("keydown",handleEscape)
        return ()=>{
            document.removeEventListener("mousedown",handleOutSideClick)
            document.removeEventListener("keydown",handleEscape)
        }
    },[])

}
