"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import approach1 from "../../assets/img/approach1.png"
import approach2 from "../../assets/img/approach2.png"




export default function Approach() {
  const router = useRouter()
  return (
    <div className=" bg-[#FFFFFF] w-[100%]">
      <div className="max-lg:px-[50px] max-lg:py-[100px] max-xl:pt-[100px] pt-[301px] pb-[179px] container mx-auto max-w-[1728px]" >
        <div className='max-lg:grid-cols-1 grid grid-cols-2 items-center'>
          <div className='max-sm:w-full relative max-lg:w-[50%] mx-auto'>
            <Image className='max-lg:max-w-full h-auto' src={approach2} alt=''/>
            <Image className='max-lg:max-w-[70%] max-xl:top-[30px] max-xl:right-[40px] h-auto absolute top-[107px] right-0' src={approach1} alt=''/>
          </div>
          <div className='max-lg:mx-auto max-xl:ml-[50px] max-2xl:ml-[100px] ml-[186px] mr-[50px] max-lg:text-center'>
            <h1 className='capitalize max-sm:text-[25px] max-lg:leading-[20px] max-xl:mb-[20px] max-xl:text-[40px] text-[65px] leading-[79px] font-[700]'>Our Approach</h1>
            <div className='max-lg:mx-auto max-lg:w-[31px] max-lg:h-[5px] max-lg:mt-[10px] max-lg:mb-[20px] mt-[26px] mb-[65px] w-[100px] h-[20px] bg-[#F9BB1B]'/>
            <p className='max-lg:leading-[26px] max-lg:text-[18px] max-xl:leading-[36px] max-xl:text-[26px] max-w-[542px] font-[500] text-[33px] leading-[40px] text-[#101631]'>
              We set ourselves apart from 
              other providers by our philosophy
              that every patient is unique, and 
              deserves an individualised 
              evidence-based approach. 
              Patience, care and compassion 
              is an aspect of everything that 
              we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

