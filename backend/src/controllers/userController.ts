import { User } from "../db.js"
import { userValidation } from "../valiadtion.js"
import type { Request,Response } from "express"
import { compareSync, genSalt, hashSync } from 'bcrypt-ts'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
export const signUp = async (req:Request,res:Response)=>{
    if(!req.body.username || !req.body.password) return res.status(403).json({success:false,message:"email and password is required"})
    const isValid = userValidation.safeParse(req.body)
        if(!isValid.success){
        const errors = isValid.error.issues.map(err=>err.message)
         return res.status(400).json({success:false,message:errors})
        }
        
     try {
        const isUserExist = await User.findOne({
            username:req.body.username
        })
        if(isUserExist) return res.status(400).json({message:"user already exist please signin"})
        const hashedPassword = hashSync(req.body.password,10)
        const newUser = await User.create({
            username:req.body.username,
            password:hashedPassword
        })
        const userId = newUser._id;
        const token = jwt.sign({userId},process.env.JWT_SECRET!,{expiresIn:"7d"})
        res.status(200).json({success:true,message:"signup successful",userId:userId,token:token})
     } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"internal server error"})
     }

}

export const signIn = async (req:Request,res:Response)=>{
    const isValid = userValidation.safeParse(req.body)
    if(!req.body.username || !req.body.password) return res.status(403).json({success:false,message:"username and password is required"})
    if(!isValid.success){
        const errors = isValid.error.issues
        return res.status(403).json({success:false,message:errors})
    }
    try {
       let user = await User.findOne({username:req.body.username})
       if(!user) return res.status(404).json({success:false,message:"user doesn't exist please signup"})
    const isPasswordCorrect = compareSync(req.body.password,user.password)
    if(!isPasswordCorrect) return res.status(403).json({success:false,message:"incorrect password"});
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET!,{expiresIn:"7d"})
    return res.status(200).json({success:true,message:"signin successful",token})
       } catch (error) {
        return res.status(500).json({success:false,message:"server error"})
    }
}