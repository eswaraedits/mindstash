import mongoose, { Types } from "mongoose"

const contentTypes = ["video","audio","image","article","blog","youtube"]
const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const tags = new mongoose.Schema({
    title:{type:String,required:true,unique:true}
})
const contentSchema = new mongoose.Schema({
    type:{type:String,enum:contentTypes,required:true},
    title:{type:String,required:true},
    link:{type:String,required:true},
    tags:[{type:Types.ObjectId,ref:"Tag"}],
    userId:{type:Types.ObjectId,ref:"User"}
})
const linkSchema = new mongoose.Schema({
    hash:String,
    userId:{type:Types.ObjectId,ref:"User",required:true}
})
export const User = mongoose.model("User",UserSchema)
export const Tag = mongoose.model("Tag",tags)
export const Content = mongoose.model("Content",contentSchema)
export const LinkModel = mongoose.model("LinkModel",linkSchema)