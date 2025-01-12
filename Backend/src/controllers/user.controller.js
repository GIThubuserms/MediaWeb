import {asynchandler} from '../utils/Asynchandler.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'
import { cloudinaryupload } from '../utils/Cloudinary.js'

export const login=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    
    if(!(email ||password )){
        throw new Error("All fields are required")
    }
    
    const isuseralreadyexists= await User.findOne({email})
    if(!isuseralreadyexists){
        throw new Error("User Doesnot exists ")
    }
    
    const ispasscorrect=await isuseralreadyexists.verifypassword(password)
    if(!ispasscorrect){
        throw new Error("Incorrect Password")
    }

    const refreshtoken=isuseralreadyexists.generaterefreshToken()
    if(!refreshtoken){
        throw new Error("Error while generating token")
    }
    const options={
        httpOnly:true,
        secure:true
    }    
    return res.status(200).cookie('jwt',refreshtoken,options).json({message:{isuseralreadyexists}})
})

export const signup=asynchandler(async(req,res)=>{    
    const {username,email,password}=req.body
    const avatar=req.file
    console.log(avatar.path);
    
    if(!(username||email ||password ||avatar)){
        throw new Error("All fields are required")
    }

    const isuseralreadyexists= await User.findOne({$or:[{username},{email}]})
    if(isuseralreadyexists){
        throw new Error("User already exists")
    }
    
    const avatarurl=await cloudinaryupload(avatar.path)

    if(!avatarurl){
        throw new Error("File uploading fail")
    }
    
     
    const newuser=await User.create({
        username:username,
        email:email,
        password:password,
        avatar:avatarurl
    })
    
    if(!newuser){
        throw new Error("User creation fail")

    }    
    return res.status(200).json({message:newuser})

})

export const logout=asynchandler(async(req,res)=>{
   return res.status(200).clearCookie('jwt').json({message:"User logout succesfully"})

})
