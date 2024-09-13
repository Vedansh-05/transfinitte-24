import React from 'react'
import { admin, logo, tffooter } from '../assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-[1342px] h-[300px] mb-[84px] py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black'>
        <div className='flex justify-center items-center gap-[24px] self-stretch tf-footer'>
            <img
            src={tffooter}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
