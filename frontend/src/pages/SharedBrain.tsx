import { useEffect } from "react"
import { useContent } from "../store/contentStore"
import { Card } from "../components/Card"


export default function SharedBrain() {
    const {content,getContent,isLoading} = useContent()

    useEffect(()=>{
        getContent()
    },[])
  return (
    <div>
        <div className="flex h-screen items-center justify-center">{isLoading?<div className="text-black   border-gray-700 items-center flex justify-center text-3xl">loading...</div>:<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4 max-w-7xl border-2 overflow-scroll border-red-50 shadow-2xl rounded-2xl">
            {content.map((item)=>{return <Card link={item.link} title={item.title} type={item.type}/>})}
          </div>}</div>
    </div>
  )
}
