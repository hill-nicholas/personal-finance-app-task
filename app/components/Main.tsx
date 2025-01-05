import React from 'react'
import HeaderCard from './HeaderCard';
import PotsCard from './PotsCard';
import TransactionCard from './TransactionCard';
import RecurringBills from './RecurringBills';
import BudgetCard from './BudgetCard';
import SidebarMobile from './SidebarMobile';

const Main = () => {
  return (
    <div className= 'w-svw lg:w-5/6 flex flex-col gap-10 py-16 px-10 relative overflow-x-hidden '>
      <p className='text-[#201f24] text-3xl font-bold'>Overview</p>
      <HeaderCard/>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className=' w-full lg:w-[55%] flex flex-col  gap-5'>
          <PotsCard/>
          <TransactionCard/>
        </div>
        <div className='w-full lg:w-[45%] flex flex-col gap-5'>
          <BudgetCard/>
          <RecurringBills/>
        </div>
      </div>
      <SidebarMobile/>
    </div>
  )
}

export default Main