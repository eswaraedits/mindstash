import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { ContentModal } from "../components/ContentModal";
import { SideBar } from "../components/SideBar";
import { Footer } from "../components/Footer";
import { useContent } from "../store/contentStore";
import { Card } from "../components/Card";
import { ShareBrainDialog } from "../components/ShareBrainDialog";
export default function Dashboard(){
  const [open,setOpen] = useState(false)
  const [shareOpen,setShareOpen] = useState(false)
  const {content,getContent,isLoading} = useContent()


  useEffect(()=>{
    getContent()
  },[])
  return <div>
    <div className="flex bg-gray-200 overflow-scroll">
          {open && <ContentModal open={open} onClose={()=>setOpen(false)}/>}
          {shareOpen && <ShareBrainDialog open={shareOpen} onClose={()=>setShareOpen(false)}/>  }
          <SideBar/>
        <div className="h-screen w-screen">
          <div className="flex justify-end p-8 gap-2">
            <Button text="Add Content" variant="primary" startIcon={<PlusIcon size="md"/>} size="md" onClick={()=>setOpen(!open)}/>
            <Button text="Share" variant="secondary" startIcon={<ShareIcon size="md"/>} size="md" onClick={()=>setShareOpen(!shareOpen)}/>
          </div>
          {isLoading?<div className="text-black  items-center flex justify-center text-3xl">loading...</div>:<div className="grid grid-cols-3 ml-72 gap-3">
            {content.map((item)=>{return <Card link={item.link} title={item.title} type={item.type}/>})}
          </div>}
        </div>
    </div>
    <Footer/>
  </div>
}