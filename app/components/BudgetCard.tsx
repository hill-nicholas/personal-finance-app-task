import React from 'react'
import CircularProgressBar from './ui/pie-chart'
import { MdArrowDropDown } from 'react-icons/md'

const BudgetCard = () => {
  return (

    <div className='rounded-lg bg-white px-5 pt-6 pb-10  '>
      <div className='flex justify-between mb-5'>
          <p className='text-[#201f24] font-bold'>Budgets</p>
          <p className='flex items-center gap-3'>See details <MdArrowDropDown size={30} /> </p>
      </div>
    <div className='flex gap-16 items-center justify-center flex-col lg:flex-row'>
      <CircularProgressBar/>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex w-full lg:flex-col gap-5'>
          <div className='border-l-4 border-l-[#82C9D7] p-[0.35rem] w-full'>
              <p className='text-[12px] '>Bills</p>
              <p className='font-semibold text-[12px] '>750</p>
          </div>
          <div className='border-l-4 border-l-[#597C7C] p-[0.35rem] w-full'>
              <p className='text-[12px] '>Personl Care</p>
              <p className='font-semibold text-[12px] '>100</p>
          </div>
        </div>
        <div className='flex w-full lg:flex-col gap-5'>
          <div className='border-l-4 border-l-[#F2CDAC] p-[0.35rem] w-full'>
              <p className='text-[12px] '>Dining out</p>
              <p className='font-semibold text-[12px] '>75</p>
          </div>
          <div className='border-l-4 border-l-[#826CB0] p-[0.35rem] w-full'>
              <p className='text-[12px] '>Entertainment</p>
              <p className='font-semibold text-[12px] '>50</p>
          </div>
        </div>
      </div>
    </div>
    </div>
        
  )
}

export default BudgetCard