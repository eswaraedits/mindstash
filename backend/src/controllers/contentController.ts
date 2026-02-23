import { Response,Request } from "express";
import { Content } from "../db.js";

export const getContent = async (req:Request,res:Response)=>{
    const userId = (req as any).userId;
    try {
        const data = await Content.find({userId})
        return res.status(200).json({success:true,data,message:"data fetched successfully"})
    } catch (error) {
        return res.status(500).json({success:false,message:"data fetching failed"})
    }
}
export const postContent = async (req:Request,res:Response)=>{
    const userId = (req as any).userId;
    if(!userId){
        return res.status(403).json({sucess:false,message:"Unauthorized"})
    }
    const {title,link,type} = req.body
    if(!title || !link){
        return res.status(400).json({success:false,message:"title and link is required"})
    }
    try{
        await Content.create({title,link,type,userId})
        return res.status(200).json({success:true,message:"content added successfully"})}
     catch (error) {
        console.log(error)
        return res.status(401).json({success:false,message:"error adding content"})
    }
}

export const deleteContent = async (req:Request,res:Response)=>{
    const id = req.params
    try {
        await Content.findByIdAndDelete({id})
        res.status(200).json({success:true,message:"deleted successful"})
    } catch (error) {
        res.status(500).json({success:false,message:"deletion failed"})
    }
}