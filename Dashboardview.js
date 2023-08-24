import React from 'react'
import { FaSearch,FaRegBell,FaEnvelope } from 'react-icons/fa'
import profile from "../assets/profile.jpg";

const Dashboardview = () => {
  return (
    <div>
        <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal'placeholder='Search for....'/>
            <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                <FaSearch color='white'/>
            </div>
        </div>
        <div>
            <div>
                <FaRegBell/>
                <FaEnvelope/>
            </div>
            <div>
                <p>Douglas McGee</p>
                <div>
                    <img src={}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboardview