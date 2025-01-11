export const asynchandler=(fn)=>{
return async(req,res)=>{
   try {
     await fn(req,res)
   } catch (error) {
    res.status(400).json({message:error.message})
   }

}
}


