import React from 'react'
import { FaDollarSign } from 'react-icons/fa6';
import { MdArrowDropDown } from "react-icons/md";
import { TbCashRegister } from 'react-icons/tb';
const PotsCard = () => {
  return (
    <div className='rounded-lg bg-white px-5 pt-6 pb-10  '>
        <div className='flex justify-between mb-5'>
            <p className='text-[#201f24] font-bold'>Pots</p>
            <p className='flex items-center gap-3'>See details <MdArrowDropDown size={30} /> </p>
        </div>
        <div className='flex gap-4'>
            <div className='bg-[#f8f4f0] rounded-lg px-2 py-4  w-1/3 flex items-center gap-3 self-start'>
                <TbCashRegister  size={40} className='text-[#277C78]' />
                <div className=''>
                    <p className='text-sm'>Total saved</p>
                    <p className='font-bold text-3xl flex gap-1 mt-1'><FaDollarSign /> 907</p>
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-2'>
                <div className='border-l-4 border-l-[#826CB0] p-[0.35rem] w-full'>
                    <p className='text-[12px] '>Holiday</p>
                    <p className='font-semibold text-[12px] '>$ 531</p>
                </div>
                <div className='border-l-4 border-l-[#F2CDAC] p-[0.35rem] w-full'>
                    <p className='text-[12px] '>New laptop</p>
                    <p className='font-semibold text-[12px] '>$ 531</p>
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-2'>
                <div className='border-l-4 border-l-[#82C9D7] p-[0.35rem] w-full'>
                    <p className='text-[12px] '>Gift</p>
                    <p className='font-semibold text-[12px] '>$ 531</p>
                </div>
                <div className='border-l-4 border-l-[#597C7C] p-[0.35rem] w-full'>
                    <p className='text-[12px] '>Savings</p>
                    <p className='font-semibold text-[12px] '>$ 531</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PotsCard