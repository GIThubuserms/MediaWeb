import React from 'react'
import { IoHeartOutline } from "react-icons/io5";

function Post() {
    return (
        <div className='mb-5 '>
            <div class="max-w-sm space-y-2 rounded-xl  bg-white border  shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="avatar flex h-16 p-2 space-x-2">
                    <div className="ring-primary ring-offset-base-100 w-14  rounded-full ring ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <div className='w-full ' >
                        <p>Murtaza saleem</p>
                        <p>12:15</p>
                    </div>
                   
                </div>
                <img class="h-[400px] w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JX4dyggkixSXU15kp8ZLDpXFEMsuaAEjcQ&s" alt="" />
                <div className='flex space-x-1 items-center'>
                    <IoHeartOutline size={24} />
                    <span className='font-semibold text-sm'>56 likes</span>
                </div>
            </div>


        </div>
    )
}

export default Post
