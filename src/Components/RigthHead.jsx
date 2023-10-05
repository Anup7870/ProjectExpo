import React from "react";

export default function RigthHead() {
  return (
    <div className='w-full h-[22%]  border-b border-[gray] '>
      <header className='w-full   pt-3'>
        <div className='info flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-8 justify-center items-center'>
            <img
              src='https://www.dspmuranchi.ac.in/images/logo-circle.png'
              alt=''
            />
            <h2 className='font-bold text-2xl'>
              Dr.shyama prasad mukherjee university
            </h2>
          </div>
          <button
            type='button'
            className='w-20 h-10 bg-[#50aee4] drop-shadow-xl rounded-lg'>
            Sign out
          </button>
        </div>
      </header>
    </div>
  );
}
