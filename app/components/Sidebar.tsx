import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { TbCashRegister } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className='bg-[#201f24] gap-10 pt-10 flex-col w-1/6 rounded-t-lg rounded-bl-lg min-h-svh hidden lg:flex'>
        <div className='p-5'><p className='font-[900] text-white text-2xl'>Hillary Finance</p></div>
        <div className='flex flex-col'>
            <div className='bg-white text-grey-900 flex items-center gap-5 p-5 border-l-4 border-l-[#277C78] w-5/6 rounded-r-lg cursor-pointer'>
                <FaHouse size={25} fill='#277C78' />
                <p className='text-black font-bold'>Overview</p>
            </div>
            <div className=' text-grey-900 flex items-center gap-5 p-5 border-l-4 border-[#201f24] w-5/6 cursor-pointer'>
                <LuArrowUpDown size={25} className='text-[#B3B3B3]' />
                <p className='text-white font-bold'>Transactions</p>
            </div>
            <div className=' text-grey-900 flex items-center gap-5 p-5 border-l-4 border-[#201f24] w-5/6 cursor-pointer'>
                <FaChartPie  size={25} className='text-[#B3B3B3]' />
                <p className='text-white font-bold'>Budget</p>
            </div>
            <div className=' text-grey-900 flex items-center gap-5 p-5 border-l-4 border-[#201f24] w-5/6 cursor-pointer'>
                <TbCashRegister  size={25} className='text-[#B3B3B3]' />
                <p className='text-white font-bold'>Pots</p>
            </div>
            <div className=' text-grey-900 flex items-center gap-5 p-5 border-l-4 border-[#201f24] w-5/6 cursor-pointer'>
                <RiBillLine  size={25} className='text-[#B3B3B3]' />
                <p className='text-white font-bold'>Recurring bills</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar