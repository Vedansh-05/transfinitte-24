import React from 'react'
import {  arrowbl, arrowwh, numbersvg } from '../assets'
import { toast } from 'sonner'
import { Button } from './ui/button'

const Header = () => {
  const handleClick = () => {
    toast("Coming Soon", {
          
      description:"Tuesday, 8 October 2024, 9:00 AM",// Custom style for description
      style: {
        backgroundColor: '#EDEDED', 
        color: '#000',    
        padding: '16px',  
        font: 'Geist',  
      },
    });
  };
  return (
    <div className='flex justify-between items-center h-[72px] bg-black shrink-0 self-stretch border-b-[#EDEDED26] border-b border-solid px-12 sticky top-0 shadow-md z-50'>
      <div className='text-[#A1A1A1] font-geistmono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase'>OCT 18-20 2024, GJCH</div>
      <div className='flex flex-row gap-1'>
        <div className='text-white text-center text-xl font-spacegrotesk font-medium leading-5 tracking-[-0.1px] uppercase'> Transfinitte</div>
        <div>
          <a> 
            <img 
            src={numbersvg} 
            alt='24'
            />
          </a>
        </div>
      </div>
      <div className='w-[220px] h-[20px] flex gap-[36px] mr-[48px] justify-center items-center'>
        <a href='https://www.instagram.com/tc_nitt/' target="_blank" rel="noopener noreferrer">
          <button className='flex flex-row gap-1 justify-center items-center'>
              <div className='text-offwhite text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>INSTAGRAM</div>
              <div>
              <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>      
          </button>
        </a>
        <Button
          variant="outline"
          onClick={handleClick}
        >
          <div className='flex flex-row gap-1 justify-center items-center bg-offwhite px-5 py-2 rounded-full'>
            <div className='text-black text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite'>REGISTER</div>
            <div>
              <img
              src={arrowbl}
              className='max-w-none w-fit bg-offwhite'/>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Header
