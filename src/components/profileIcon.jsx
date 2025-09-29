import React from 'react'
import MySvg from '../assets/myMain.svg'

export default function ProfileIcon() {
    return (
        <div className=" flex w-[20%] h-auto items-center justify-center  rounded-full overflow-hidden absolute top-[8%] right-[10%]">
            <img src={MySvg} alt="Profile Icon" className="w-full h-full object-cover" />
        </div>
    )
}
