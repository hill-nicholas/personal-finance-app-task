import React from 'react'
import { FaChartPie, FaHouse } from 'react-icons/fa6'
import { LuArrowUpDown } from 'react-icons/lu'
import { RiBillLine } from 'react-icons/ri'
import { TbCashRegister } from 'react-icons/tb'

const SidebarMobile = () => {
  return (
    <div className='fixed w-[80%] lg:hidden bg-[#201f24] rounded-lg py-2 px-4 top-[90%] flex-col gap-3 self-center'>
        <div className=''><p className='font-[900] text-center text-white text-2xl'>Hillary Finance</p></div>
        <div className=' flex justify-between items-center'>
            <FaHouse size={25} fill='#277C78' />
            <LuArrowUpDown size={25} className='text-[#B3B3B3]' />
            <FaChartPie  size={25} className='text-[#B3B3B3]' />
            <TbCashRegister  size={25} className='text-[#B3B3B3]' />
            <RiBillLine  size={25} className='text-[#B3B3B3]' />
        </div>
    </div>
  )
}

export default SidebarMobile