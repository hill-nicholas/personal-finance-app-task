import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'

const RecurringBills = () => {
  return (
    <div className='rounded-lg bg-white px-5 pt-6 pb-10  '>
        <div className='flex justify-between mb-5'>
            <p className='text-[#201f24] font-bold'>Recurring bills</p>
            <p className='flex items-center gap-3'>See Details  <MdArrowDropDown size={30} /> </p>
        </div>

        <div className='flex flex-col gap-5'>
            <div className='border-l-4 rounded-lg border-l-[#277C78] p-5 bg-[#f8f4f0] flex justify-between '>
                <p className='text-gray-500'>Paid Bills</p>
                <p className='font-semibold'>$239.98</p>
            </div>
            <div className='border-l-4 rounded-lg border-l-[#F2CDAC] p-5 bg-[#f8f4f0] flex justify-between '>
                <p className='text-gray-500'>Total Upcoming</p>
                <p className='font-semibold'>$304.58</p>
            </div>
            <div className='border-l-4 rounded-lg border-l-[#82C9D7] p-5 bg-[#f8f4f0] flex justify-between '>
                <p className='text-gray-500'>Due Soon</p>
                <p className='font-semibold'>$154.98</p>
            </div>
        </div>
    </div>
  )
}

export default RecurringBills