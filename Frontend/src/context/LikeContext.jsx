import {  createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'

export const LikeContext=createContext()

export const Likeprovider=({children})=>{
    const [likes, setlikes] = useState(0);
       
    async function fetchlike(postid) {
        try {
            const res = await axios.post(
                `http://localhost:4000/api/v1/likes/like/${postid}`,
                {},
                { withCredentials: true }
            );
            if (res.data.message) {
                toast.success(res.data.message)  
                
                return res.data.message
            }
            else {
                        console.error("Like Not Happening");
                        toast.error("Like Not Happening");
                 }
        }      
        catch (error) {
            console.error("Error fetching like:", error.message);
        }
      
    }
    
    async function fetchTotallike(postid) {
        try {
            const res = await axios.post(
                `http://localhost:4000/api/v1/likes/totallikes/${postid}`,
                {},
                { withCredentials:true }
            );
            if (res.data.message) {
                console.log(res.data.message?.Totallikes);
                setlikes(res.data.message?.Totallikes)
            return true
            }
        }      
        catch (error) {
            console.error("Error fetching Totallikes:", error.message);
        }
    }

    return <LikeContext.Provider value={{fetchTotallike,fetchlike,likes,setlikes}}>
        {children}
    </LikeContext.Provider>
}


export const useLikecontext=()=>{
    return useContext(LikeContext)
}