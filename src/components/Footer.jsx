import React from 'react'
import { arrowwh, tffooter } from '../assets'

const Footer = () => {
  return (
    <div className='flex items-end justify-center'>
      <div className='flex w-[1342px] h-[300px]     py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black'>
        <div className='flex justify-center items-center gap-[24px] self-stretch tf-footer'>
            <img
            src={tffooter}/>
        </div>
        <div className='w-[full] h-[1.25rem] flex py-0 px-[46px] justify-between items-center self-stretch'>
          <div className='text-[#A1A1A1] font-geistmono text-[1rem] not-italic font-normal leading-normal tracking-[-0.01rem] uppercase'>© 2024 TRANSFINITTE. All Rights Reserved.</div>
          <div className='flex items-center gap-4'>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links'>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>Contact</div>
                <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>
            </div>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links'>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>Locate Us</div>
                <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>
            </div>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links'>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>2023 Archive</div>
                <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
