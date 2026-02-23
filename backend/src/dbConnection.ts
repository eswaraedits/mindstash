import mongoose from "mongoose";
 export const dbConnection = async ()=>{
   await mongoose.connect(process.env.MONGO_URI!).then(()=>{
    console.log("database connected")
 }).catch((error)=>console.log(error))
 }