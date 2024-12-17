import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import HeaderCard from './HeaderCard';
import PotsCard from './PotsCard';
import TransactionCard from './TransactionCard';
import RecurringBills from './RecurringBills';
import BudgetCard from './BudgetCard';

const Main = () => {
  return (
    <div className= 'w-5/6 flex flex-col gap-10 py-16 px-10'>
      <p className='text-[#201f24] text-3xl font-bold'>Overview</p>
      <HeaderCard/>
      <div className='flex gap-10'>
        <div className='w-[55%] flex flex-col gap-5'>
          <PotsCard/>
          <TransactionCard/>
        </div>
        <div className='w-[45%] flex flex-col gap-5'>
          <BudgetCard/>
          <RecurringBills/>
        </div>
      </div>
    </div>
  )
}

export default Main