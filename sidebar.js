import React from 'react'
import {FaRegSun, FaTachometerAlt,FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronLeft, FaBolt} from "react-icons/fa";

const sidebar = () => {
  return (
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
        <div className='px-[15px] py-[30px] flexitems-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text-[13px] leading-[24px] font-extrabold cursor-pointer '>Admin panel</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
          <FaTachometerAlt color='white'/>
          <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>pages</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegChartBar color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            </div> 


        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] '>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaStickyNote color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>components</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaWrench color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            <div className='flex items-center gap-[10px] py-[15px]'>
                    <FaRegCalendarAlt color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
        </div>


            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[20px] w-[20px] bg-[#3C5EC1] rounded-full  flex items-ccenter justify-center cursor-pointer'>
                  <FaChevronLeft color='white'/>
                </div>
            </div>
              <div className='bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px] '>
                 <FaBolt color='white'/>
                 <p className='text-[12px] leading-[18px] font-normal text-white/[0.4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit,Quam, soluta.</p>
                 <button className='bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to pro!</button>
              </div>


    </div>   
  )
}

export default sidebar;