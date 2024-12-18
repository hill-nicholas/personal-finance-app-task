'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircularProgressBar() {
  const data = {
    labels: ['Bills', 'Personal Care','Dining out','Entertainment'],
    datasets: [
      {
        data: [75, 10,7.5,5.0], 
        backgroundColor: [ '#82C9D7','#597C7C','#F2CDAC','#826CB0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: { enabled: true }, 
      legend: { display: false }, 
    },
  };

  return (
    <div className="relative w-[200px] h-[200px] flex justify-center items-center">
      <Doughnut data={data} options={options} />
      <div className="absolute text-center flex flex-col gap-1">
        <span className="text-2xl font-bold">$ 892</span>
        <p className='text-xs text-gray-500'>of $925 limit</p>
      </div>
    </div>
  );
}
