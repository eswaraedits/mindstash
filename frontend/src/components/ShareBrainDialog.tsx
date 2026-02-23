import {AnimatePresence, motion} from 'framer-motion'
import { useRef, useState } from 'react'
import { useClickOutSide } from './hooks/useClickOutSide'
import ClipboardIcon from '../icons/clipboardIcon'
import axios from 'axios'
import OpenIcon from '../icons/OpenIcon'
import { toast } from 'sonner'
export function ShareBrainDialog({open,onClose}:{
    open:boolean,
    onClose:()=>void
}){

    const dropRef = useRef(null)
    useClickOutSide(dropRef,onClose)
    const [shareLink,setLink] = useState("")
    const [title,setTitle] = useState("copy link")

    //making a customhook instead of this 
  /*   useEffect(()=>{

        const handleOutSideClick = (event:MouseEvent)=>{
            if(dropRef.current && !dropRef.current.contains(event.target as Node)){
                onClose()
            }
        }
        
        document.addEventListener("mousedown",handleOutSideClick)

        return ()=>document.removeEventListener('mousedown',handleOutSideClick)
    },[]) */
    const handleShare = async()=>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/brain/share`,{
                share:true},{headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            const hash = response.data.hash
            const fullLink = `${window.location.origin}/brain/${hash}`;
            setLink(fullLink)
            setTitle("copied")
            navigator.clipboard.writeText(fullLink)
            setTimeout(()=>{setTitle("copy link")},5000)
            toast.success("link copied",{position:"top-right",duration:1000})
        } catch (error) {
            
        }
    }
    return <div>
        <AnimatePresence>
             {open && 
        <motion.div
            ref={dropRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ type: "spring", damping: 20, duration:0.3,bounce:0.3, stiffness: 300 }}
            className="absolute right-4 top-18  w-80 h-44  rounded-2xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-2xl"
          >
            <div className=" flex justify-end relative top-9 right-10 inset-1">
                <div className="rounded-2xl pl-2.5">
                    <p className="font-semibold text-lg pt-3 border-b mx-auto mr-6">Share Your Brain</p>
                    <p className='pt-1'>Share your entire collection of notes, docs, tweets, and videos with others.</p>
                    <div className='flex justify-center mr-4 py-1'>
{/*                        <Button variant='secondary' startIcon={ <ClipboardIcon/>} text={"copy link"}/>
 */}                      <button onClick={handleShare} className='px-2 py-1.5 bg-white/80 backdrop-blur-2xl rounded-xl flex gap-1 items-center hover:bg-gray-200 cursor-pointer'><ClipboardIcon/>{title}</button>
                            {title==="copied" && <div onClick={()=>{window.open(shareLink,"_blank")}} className='px-2 py-1.5 rounded-2xl hover:bg-[#2C2C2C] ml-2 transition-all shadow-lg shadow-slate-900/20 flex items-center gap-1 '><OpenIcon/> open</div>}
                    </div>
                </div>
            </div>
        </motion.div>
            }
        </AnimatePresence>
       
    </div>
}