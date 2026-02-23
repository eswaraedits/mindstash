import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { InputBox } from "./InputBox";
import { Button } from "./ui/Button";
import DropDown from "../icons/dropDown";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useClickOutSide } from "./hooks/useClickOutSide";

export interface contentModalProps{
    open?:boolean,
    onClose:()=>void
}
//controlled componenet

enum contentType{
    youtube="youtube",
    twitter="twitter"
}
export function ContentModal({open,onClose}:contentModalProps){
    const [isLoading,setIsLoading] = useState(false)
    const [title,setTitle] = useState("")
    const [type,setType] = useState("")
    const [link,setLink] = useState("")
    const [error,setError] = useState("")
    const contentRef = useRef(null)
    useClickOutSide(contentRef,onClose)

    const handleSubmit = async ()=>{
        setIsLoading(true)
     try {
        const content = {title:title,link:link,type:type}
        console.log(content)
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/content`,content,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`}
        })
        if(response?.data.success){
            toast.success("content added")
            onClose()
        }d
     } catch (err:any) {
        setError(err.response.data.message || "something went wrong")
        toast.error(error)
     }finally{
        setIsLoading(false)
     }

    }

    return <div>
        {
            open && <div ref={contentRef} className="w-screen h-screen flex justify-center backdrop-blur-xs fixed z-2 ">
                    <div className="bg-slate-200 p-4 w-80 h-80 top-0 my-40 justify-center rounded-lg">
                        <div className="flex justify-end text-lg text-gray-800">
                            <CloseIcon onClose={onClose}/>
                        </div>
                        <div className="[&_div]:text-gray-900 [&_input]:text-gray-900"><InputBox title="enter title"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)}/></div>
                        <div className="group relative inline-block pt-2">
                        <button className="bg-gray-400 text-gray-900 px-4 py-2 rounded flex">{type===""?<span className="flex">select type<DropDown/></span>:<span className="flex">{type}<DropDown/></span>}</button>
                        <div className="hidden group-hover:block absolute left-0 w-48 bg-gray-100 border border-gray-100 rounded shadow-lg">
                            <a onClick={()=>setType(contentType.youtube)} className="block px-4 py-2 hover:bg-gray-100">youtube</a>
                            <a onClick={()=>setType(contentType.twitter)} className="block px-4 py-2 hover:bg-gray-100">twitter</a>
                        </div>
                        </div>

                        <div className="[&_div]:text-gray-900 [&_input]:text-gray-900"><InputBox title="enter link" type={"link"} link={link} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLink(e.target.value)}/></div>
                        <div className="flex justify-center pt-1"><Button onClick={handleSubmit} variant="primary" text="submit" size="sm" /></div>
                    </div>
            </div>

        }
    </div>
}