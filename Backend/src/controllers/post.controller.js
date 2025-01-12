import {asynchandler} from '../utils/Asynchandler.js'
import {User} from '../models/user.model.js'
import {Post} from '../models/post.model.js'
import { cloudinaryupload } from '../utils/Cloudinary.js'


export const createPost=asynchandler(async(req,res)=>{
const {discription}=req.body
const post=req.file
const user=req.user

if(!(discription||post)){
    throw new Error("Discription and Post are required feilds")        
}

const cloudinaryuploadd=await cloudinaryupload(post.path)
if(!cloudinaryuploadd){
    throw new Error("Post Not uploading")        
}
console.log(user);

const newpost=await Post.create({
    discription:discription,
    pic:cloudinaryuploadd,
    owner:user._id
})

if(!newpost){
    throw new Error("Discription and Post are required feilds")        
}
return res.status(200).json({message:newpost})

})


export const getposts=asynchandler(async(req,res)=>{
    let {pageNum,postsperpage}=req.query
    postsperpage=Number(postsperpage) || 5
    const startindex=postsperpage*(pageNum-1) || 1
    const endindex=postsperpage*pageNum 

    const postperquery=await Post.aggregate([
        {
            $lookup:{
            from:"users",
            localField:"owner",
            foreignField:"_id",
            as:"owner",
            pipeline:[
                {
                    $addFields: {
                        owner: { $arrayElemAt: ["$owner", 0] }, // Get the first owner (if exists)
                    },
                }
            ]
        }
        },
        {
            $skip:startindex
        },
        {
            $limit:postsperpage
        }
    ])

    console.log(postperquery);
    if(postperquery.length<0||!postperquery){
     throw new Error("Post Not fetching")
    }
    return res.status(200).json({message:postperquery})
})