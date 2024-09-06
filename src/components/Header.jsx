import React from 'react'
import { instagramtext, numbersvg, registertext } from '../assets'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[72px] shrink-0 self-stretch bg-black border-b-[#EDEDED26] border-b border-solid px-3'>
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
      <div className='flex flex-row gap-5 items-center'>
        <div>
          <a href=''>
            <img 
            src={instagramtext}
            alt='instagram'
            />
          </a>
        </div>
        <div>
          <a href=''>
            <img 
            src={registertext}
            alt='instagram'
            />
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Header
