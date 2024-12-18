import React from 'react'
import { FaDollarSign } from 'react-icons/fa6'

const HeaderCard = () => {
  return (
    <div className='flex justify-between gap-5 items-center'>
        <div className='rounded-lg p-5 bg-[#201f24] text-white w-1/3'>
          <p>Current Balance</p>
          <p className='font-bold text-3xl mt-3 flex gap-3 items-center'><FaDollarSign /> 4849</p>
        </div>
        <div className='rounded-lg p-5 bg-white text-[#201f24] w-1/3'>
          <p>Income</p>
          <p className='font-bold text-3xl mt-3 flex gap-3 items-center'><FaDollarSign /> 3814</p>
        </div>
        <div className='rounded-lg p-5 bg-white text-[#201f24] w-1/3 '>
          <p>Expenses</p>
          <p className='font-bold text-3xl mt-3 flex gap-3 items-center'><FaDollarSign /> 7104</p>
        </div>
      </div>
  )
}

export default HeaderCard