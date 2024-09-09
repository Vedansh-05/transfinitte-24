import React from 'react'
import {  numbersvg } from '../assets'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[72px] shrink-0 self-stretch bg-black border-b-[#EDEDED26] border-b border-solid px-12'>
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
      <div className='w-[220px] h-[20px] flex gap-[42px]'>
        <div className='flex flex-row gap-0 justify-center items-center'>
          <div className='text-offwhite text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>INSTAGRAM</div>
          <div className='text-offwhite font-sfpro text-[14px] not-italic font-bold leading-[20px] tracking-[0.35px] uppercase'>􀄯</div>
        </div>
        <div className='flex flex-row gap-0 justify-center items-center'>
          <div className='text-offwhite text-center font-geistmono text-[14px] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>REGISTER</div>
          <div className='text-offwhite font-sfpro text-[14px] not-italic font-bold leading-[20px] tracking-[0.35px] uppercase'>􀄯</div>
          </div>
        </div>

      </div>
  )
}

export default Header
