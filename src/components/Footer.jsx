import React from 'react'
import { admin, logo } from '../assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-[1342px] mb-[84px] py-9 px-[46px] flex-col items-start gap-[46px] border-r border-l border-r-edge border-l-edge bg-black'>
        <div className='flex items-end gap-6 self-stretch'>
            <div className='flex w-[433px] items-start content-start gap-6 flex-wrap'>
                    <svg
                    className='w-[432.942px] h-[124px] flex-shrink-0'></svg>
                <div className='flex w-[399px] items-start content-start gap-4 flex-shrink-0 flex-wrap'>
                    <div className='text-white font-montserrat text-[24px] not-italic font-medium tracking-[-0.24px]'>Address</div>
                    <div className='flex w-[399px] items-start flex-shrink-0'>
                        <img
                        src={admin}
                        alt='admin block'
                        width='432.942px'
                        height='124px' />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <div className='text-white font-geist text-[24px] not-italic font-medium tracking-[-0.24px]'>Problem Statement</div>
                    <a className='text-white font-geist text-[18px] not-italic font-light leading-normal tracking-[-0.18px] underline' href='https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view'>2023 Problem Statement Archive</a>
                </div>
                <div className='text-[#939393] font-geist text-[16px] not-italic leading-normal tracking-[-0.16px]'>© 2024 TRANSFINITTE. All Rights Reserved.</div>
            </div>
            <div className='flex w-[514px] h-[419px] flex-col justify-between items-start'>
                <div className='flex flex-col items-start gap-4 self-stretch'>
                    <div className='text-white font-geist text-[32px] not-italic font-medium leading-normal tracking-[-0.32px]'>© 2024 TRANSFINITTE. All Rights Reserved.</div>
                    <div className='flex flex-col items-start gap-[6px] self-stretch'>
                        <div className='text-white font-geist text-[24px] not-italic font-light leading-normal tracking-[-0.24px]'>Work inquires: <span className='font-bold'>technicalcouncil@pragyan.org</span></div>
                        <div className='text-white font-geist text-[18px] not-italic font-bold leading-normal tracking-[-0.18px]'>Persons of Contact</div>
                        <div className='text-white font-geist text-[18px] not-italic font-bold leading-normal tracking-[-0.18px]'>
                        Samarth <span className='font-light'>75053 60572</span><br/>
                        vishnucharan <span className='font-light'>77089 51932</span><br/>
                        Sanjana <span className='font-light'>96532 26903</span><br/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                        <div className='text-white font-geist text-[32px] not-italic font-medium leading-normal tracking-[-0.32px]'>Socials</div>
                        <div className='flex flex-col items-start gap-[6px] self-stretch'>
                            <a className='text-white font-geist text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]' href=''>Twitter</a>
                            <a className='text-white font-geist text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]' href='https://www.instagram.com/tc_nitt/'>Instagram</a>
                            <a className='text-white font-geist text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]' href='https://in.linkedin.com/company/technical-council-nit-trichy'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[217px] flex-col justify-end items-end self-stretch'>
                <div className='flex w-[220px] h-[22px] justify-end items-end gap-[10px] flex-shrink-0'>
                    <div className='flex w-[219px] h-[22px] flex-shrink-0 gap-[10px] flex-shrink-0'>
                        <img
                        src={logo}
                        alt='transfinitte logo'
                        className='flex-shrink-0'
                        width='28.508px'
                        height='21.539px' />
                        <div className='text-[#ECECEC] font-syne text-[22px] not-italic font-bold leading-[22px] tracking-[-0.66px] font-feature-disable'>TRANSFINITTE</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
