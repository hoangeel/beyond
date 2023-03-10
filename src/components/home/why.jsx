"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import services from "../../assets/img/services.png"
import services1 from "../../assets/img/services1.png"
import services2 from "../../assets/img/services2.png"
import icon from "../../assets/img/Vector1.png"




export default function Why() {
  const router = useRouter()
  return (
    <div className=" bg-[#FFFFFF] w-[100%] mb-[225px] max-lg:mb-[102px] ">
      <div className="mx-auto max-w-[1728px] max-lg:px-[30px] max-xl:px-[50px] max-2xl:px-[100px] container px-[154px]" >
        <div className='mx-auto max-lg:text-center'>
          <h1 className='max-lg:mt-[100px] capitalize max-sm:text-[25px] max-lg:leading-[20px] max-lg:mb-[10px] max-xl:text-[40px] text-center text-[70px] leading-[85px] font-[700]'>Why we are Different</h1>
          <div className='max-xl:mb-[50px] max-lg:mt-[30px] mx-auto w-[100px] h-[20px] mt-[18px] mb-[188px] bg-[#F9BB1B] max-lg:w-[31px] max-lg:h-[5px] max-md:mt-[10px] max-lg:mb-[40px] '/>
        </div>
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
          <div className='max-lg:ml-0 ml-auto max-xl:space-y-[10px] space-y-[50px]'>
            <div className=' max-xl:text-[30px] max-sm:text-[18px] max-sm:leading-[22px] max-2xl:text-[40px] flex flex-row  items-center text-[50px] font-[600] text-[#02198E] leading-[61px]'>
              <div className=' max-sm:w-[12px] max-sm:h-[12px] max-sm:mr-[12px] max-lg:ml-auto bg-[#F9BB1B] w-[27px] h-[26px] rounded-[50%] mr-[33px]'/>
              <p className='max-lg:mr-auto'>Low Physio Rates</p>
            </div>
            <div className='max-xl:text-[30px] max-sm:text-[18px] max-sm:leading-[22px] max-2xl:text-[40px] flex flex-row  items-center text-[50px] font-[600] text-[#02198E] leading-[61px]'>
              <div className='max-sm:w-[12px] max-sm:h-[12px] max-sm:mr-[12px] max-lg:ml-auto bg-[#F9BB1B] w-[27px] h-[26px] rounded-[50%] mr-[33px]'/>
              <p className='max-lg:mr-auto'>Offering Online Classes</p>
            </div>
            <div className='max-xl:text-[30px] max-sm:text-[18px] max-sm:leading-[22px] max-2xl:text-[40px] flex flex-row  items-center text-[50px] font-[600] text-[#02198E] leading-[61px]'>
              <div className='max-sm:w-[12px] max-sm:h-[12px] max-sm:mr-[12px] max-lg:ml-auto bg-[#F9BB1B] w-[27px] h-[26px] rounded-[50%] mr-[33px]'/>
              <p className='max-lg:mr-auto'>Group Classes</p>
            </div>
          </div>
          <div className='max-lg:mt-[10px] max-xl:space-y-[10px] space-y-[50px] ml-[82px] max-2xl:ml-[30px] max-lg:ml-0'>
            <div className='max-xl:text-[30px] max-sm:text-[18px] max-sm:leading-[22px] max-2xl:text-[40px] flex flex-row  items-center text-[50px] font-[600] text-[#02198E] leading-[61px]'>
              <div className='max-sm:w-[12px] max-sm:h-[12px] max-sm:mr-[12px] max-lg:ml-auto bg-[#F9BB1B] w-[27px] h-[26px] rounded-[50%] mr-[33px]'/>
              <p className='max-lg:mr-auto'>One-on-One Classes</p>
            </div>
            <div className='max-xl:text-[30px] max-sm:text-[18px] max-sm:leading-[22px] max-2xl:text-[40px] flex flex-row  items-center text-[50px] font-[600] text-[#02198E] leading-[61px]'>
              <div className='max-sm:w-[12px] max-sm:h-[12px] max-sm:mr-[12px] max-lg:ml-auto bg-[#F9BB1B] w-[27px] h-[26px] rounded-[50%] mr-[33px]'/>
              <p className='max-lg:mr-auto'>Offering Gym Classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

