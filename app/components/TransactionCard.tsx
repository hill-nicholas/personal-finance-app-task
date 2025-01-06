import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'

const TransactionCard = () => {
  return (
    <div className='rounded-lg bg-white px-5 pt-6 pb-10 text-black  '>
        <div className='flex justify-between mb-5'>
            <p className='text-[#201f24] font-bold'>Transactions</p>
            <p className='flex items-center gap-3'>View all  <MdArrowDropDown size={30} /> </p>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src="/avatars/emma-richardson.jpg" className='rounded-full w-10' alt="" />
                    <p className='font-semibold'>Emma Richardson</p>     
                </div>
                <p className='font-semibold text-[#277C78]'>$76</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src="/avatars/daniel-carter.jpg" className='rounded-full w-10' alt="" />
                    <p className='font-semibold'>Daniel Carter</p>     
                </div>
                <p className='font-semibold'>-$104</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src="/avatars/savory-bites-bistro.jpg" className='rounded-full w-10' alt="" />
                    <p className='font-semibold'>Savory Bites Bistro</p>     
                </div>
                <p className='font-semibold '>-$90</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src="/avatars/sun-park.jpg" className='rounded-full w-10' alt="" />
                    <p className='font-semibold'>Sun Park</p>     
                </div>
                <p className='font-semibold text-[#277C78]'>$76</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src="/avatars/urban-services-hub.jpg" className='rounded-full w-10' alt="" />
                    <p className='font-semibold'>Urban Services Hub</p>     
                </div>
                <p className='font-semibold'>-$76</p>
            </div>
        </div>

    </div>
    )
}

export default TransactionCard