import React from 'react'
import {  arrowbl, arrowwh, numbersvg } from '../assets'


const Header = () => {
  return (
    <div className='flex justify-between items-center h-[72px] shrink-0 self-stretch bg-black border-b-[#EDEDED26] border-b border-solid px-12 sticky top-0 shadow-md z-50'>
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
      <div className='w-[220px] h-[20px] flex gap-[42px] mr-[48px]'>
      <a href='https://www.instagram.com/tc_nitt/' target="_blank" rel="noopener noreferrer">
        <div className='flex flex-row gap-1 justify-center items-center'>
            <div className='text-offwhite text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>INSTAGRAM</div>
            <div>
            <img
              src={arrowwh}
              className='max-w-none w-fit'/>
            </div>      
        </div>
      </a>
        <div className='flex flex-row gap-1 justify-center items-center bg-offwhite px-5 py-2 rounded-full'>
          <div className='text-black text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite'>REGISTER</div>
          <div>
            <img
            src={arrowbl}
            className='max-w-none w-fit bg-offwhite'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
