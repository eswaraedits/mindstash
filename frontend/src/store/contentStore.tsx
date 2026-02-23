import axios from "axios"
import { create } from "zustand"

interface Content{
    _id: string
    title: string
    link: string
    type: string
}

interface contentStore{
    content:Content[],
    isLoading:boolean,
    getContent:()=>Promise<void>
}

export const useContent = create<contentStore>((set)=>({
    content:[],
    isLoading:false,
    getContent:async ()=>{
        try {
            set({isLoading:true})
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/content`,{
                headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
            if(response.data.success){
                set({content:response.data.data,isLoading:false})
            }
        } catch (error) {
            console.error(error)
            set({isLoading:false})
        }finally{
            set({isLoading:false})
        }
    }
}))