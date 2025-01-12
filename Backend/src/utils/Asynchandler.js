export const asynchandler=(fn)=>{
return async(req,res,next)=>{
   try {
     await fn(req,res,next)
   } catch (error) {
    console.log(error);
    throw new Error(error)        
  }

}
}


