import express, { ErrorRequestHandler, Request, Response } from 'express';
import dotenv from "dotenv"

import cors from 'cors'
import { dbConnection } from './dbConnection.js';
import { userRouter } from './routes/userRouter.js';
import { contentRouter } from './routes/contentRouter.js';
import { authMiddleware } from './authMiddleware.js';
import { Content, LinkModel, User } from './db.js';
import {v4 as uuidv4} from "uuid"
const app = express()
const port = 3001;
dotenv.config()
app.use(express.json())
app.use(cors())
dbConnection()


app.get("/",(req,res)=>{
    return res.json("backend is active")
})
app.use("/api/v1/user",userRouter)
app.use("/api/v1/content",authMiddleware,contentRouter)
app.post("/api/v1/brain/share",authMiddleware,async (req:Request,res:Response)=>{
        const share = req.body.share
        if(share){
            const existingLink = await LinkModel.findOne({
                userId:(req as any).userId
            })
            if(existingLink){
                return res.status(201).json({hash:existingLink.hash})
            }
            const hash = uuidv4()
            await LinkModel.create({
                hash:hash,
                userId:(req as any).userId
            })
            res.status(200).json({success:true,hash})
        }else{
            await LinkModel.deleteOne({
                userId:(req as any).userId
            })
        }
})
app.get("/api/v1/brain/:shareLink",async (req,res)=>{
    const hash = req.params.shareLink
    try {
        if(!hash) return res.status(404).json({success:false,message:"invalid input"})
        const link = await LinkModel.findOne({hash})
        if(!link) return res.status(404).json({success:false,message:"link not found"})
        const content = await Content.find({userId:link.userId})
        const user = await User.findById(link.userId)
        return res.status(200).json({success:true,content,username:user?.username})
    } catch (error) {
        return res.status(500).json({success:false,message:"internal server error"})
    }
})

const errorHandler:ErrorRequestHandler = (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({success:false,message:"internal server error"})
}
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})