import React from 'react'
import { aboutus } from '../assets'

const   AboutUs = () => {
  return (
    <div>
        {/* Mobile Version */}
        <div className='block sm:hidden mx-auto bg-black max-w-[91.467%]'>
            <div className='max-h-screen flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4'>
                <div className='flex items-start content-start gap-y-6 gap-x-9 flex-1 flex-shrink-0 basis-0 flex-wrap'>
                    <div className='flex w-auto h-auto items-start'>
                        <div className='flex w-auto h-fit flex-col justify-center text-offwhite font-geist text-[2rem] font-normal leading-[60px] tracking-[-2.56px]'>
                        About us
                        </div>
                        <div className='flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono font- leading-[28px]'>(1)</div>
                    </div>
                    <div className='w-full h-auto border border-dashed rounded-lg p-2 border-[#454545]'>
                            <img
                            src={aboutus}
                            alt='about us'
                            width='100%'
                            height='100%'
                            className='object-cover w-full h-full rounded'
                            />
                    </div>
                    <div className='flex flex-col content-center items-center gap-[0.625rem] flex-1 flex-shrink-0 basis-0'>
                        <div className='max-w-fit h-auto text-[#A0A0A0] font-geistmono text-[0.813rem] text-justify leading-[18px] tracking-[0.6px] self-stretch'>
                            Welcome to TransfiNITTe'24, NIT Trichy's premier hackathon, hosted by the Technical Council and SCIENT. This is where innovation meets action.
                            <br/><br/>
                            Building on the success of TransfiNITTe'23, where 300+ participants pushed the limits in a 42-hour coding marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'24 is set to redefine the hackathon experience.
                            <br/><br/>
                            This isn't just a competition—it's a platform to create real solutions and make an impact. Join us, and be a part of something that truly matters.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Desktop version */}
        <div className='hidden sm:block mx-auto bg-black max-w-[93.194%]'>
            <div className='flex w-full py-9 px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge'>
                <div className='flex flex-row gap-12'>
                    <div className='flex max-w-[50%] h-auto flex-col items-start gap-[37px] flex-shrink-0'>
                        <div className='flex w-auto h-auto items-start'>
                            <div className='flex w-auto h-fit flex-col justify-center text-offwhite font-geist text-[3rem] font-normal leading-[60px]'>
                            About us
                            </div>
                            <div className='flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono font- leading-[28px]'>(1)</div>
                        </div>
                        <div className='max-w-fit h-auto text-[#A0A0A0] font-geistmono text-[1rem] '>
                        Welcome to TransfiNITTe'24, NIT Trichy's premier hackathon, hosted by the Technical Council and SCIENT. This is where innovation meets action.
                        <br/><br/>
                        Building on the success of TransfiNITTe'23, where 300+ participants pushed the limits in a 42-hour coding marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'24 is set to redefine the hackathon experience.
                        <br/><br/>
                        This isn't just a competition—it's a platform to create real solutions and make an impact. Join us, and be a part of something that truly matters.
                        </div>
                    </div>
                    <div className='w-1/2 h-auto border border-dashed p-2 border-[#454545] rounded-lg'>
                            <img
                            src={aboutus}
                            alt='about us'
                            width='100%'
                            height='100%'
                            className='object-cover w-full h-full rounded'
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
