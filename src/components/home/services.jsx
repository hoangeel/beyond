"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import services from "../../assets/img/services.png"
import services1 from "../../assets/img/services1.png"
import services2 from "../../assets/img/services2.png"
import icon from "../../assets/img/Vector1.png"




export default function Services() {
  const router = useRouter()
  return (
    <div className=" bg-[#FFFFFF] w-[100%]">
      <div className="max-lg:mt-[0px] max-lg:px-[50px]  container mx-auto max-w-[1728px]" >
        <div className='max-lg:flex max-lg:flex-col-reverse grid grid-cols-2 items-center'>
          <div className='max-lg:mx-auto max-xl:ml-[50px] max-2xl:ml-[100px] ml-[218px] mr-[50px] max-lg:text-center'>
            <h1 className='max-lg:mt-[100px] capitalize max-sm:text-[25px] max-lg:leading-[20px] max-xl:mb-[20px] max-xl:text-[40px] text-[65px] leading-[79px] font-[700]'>Our Services</h1>
            <div className='max-lg:mx-auto max-lg:w-[31px] max-lg:h-[5px] max-lg:mt-[10px] max-lg:mb-[20px] mt-[26px] mb-[65px] w-[100px] h-[20px] bg-[#F9BB1B]'/>
            <p className='max-lg:leading-[26px] max-lg:text-[18px] max-xl:leading-[36px] max-xl:text-[26px] max-w-[500px] font-[500] text-[33px] leading-[40px] text-[#101631]'>
              We work with Aged Care
              Facilities and NDIS patients.
              We’re experienced working 
              with patients with the 
              following conditions.
            </p>
            <Image className='max-lg:mx-auto max-lg:mt-[18px] max-lg:w-[49px] h-auto max-xl:mr-0 ml-auto mr-[50px]' src={icon} alt=''/>
          </div>
          <div className=' relative 2xl:ml-[70px]'>
            <Image className='max-sm:pl-[40px] max-lg:w-[100%] max-lg:top-[-30px] max-lg:left-[50px] h-auto absolute top-[-56px] left-[74px]' src={services1} alt=''/>
            <Image className='max-sm:left-[-30px] max-sm:pl-[40px] max-sm:bottom-[-30px] max-lg:w-[100%] max-lg:bottom-[-60px] max-lg:left-[-50px] w-[700px] h-auto absolute bottom-[-173px] left-[-70px]' src={services2 } alt=''/>
            <Image className='max-sm:pl-[40px] max-lg:w-[100%] h-auto relative m-0' src={services} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

