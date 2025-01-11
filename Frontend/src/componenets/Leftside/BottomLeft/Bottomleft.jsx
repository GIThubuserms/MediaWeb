import React from 'react'
import {Link} from 'react-router-dom'


function Bottomleft() {
    return (
        <div className='flex space-x-2 justify-center items-center   '>
            <div className="avatar flex flex-col gap-y-2 ">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                <p className='text-sm font-semibold '>Murtaza saleem</p>

            </div>
            <div className='' >
                <button className="btn btn-active"><Link to={'/logout'}>Logout</Link></button>
            </div>
        </div>
    )
}

export default Bottomleft
