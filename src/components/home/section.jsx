"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import sectionbg1 from "../../assets/img/sectionbg1.jpg"
import sectionbg2 from "../../assets/img/sectionbg2.png"
import sectionbg3 from "../../assets/img/sectionbg3.jpg"
import section1 from "../../assets/img/section1.jpg"
import star from "../../assets/img/sectionstart.png"
import button from "../../assets/img/boxButton.png"



export default function Section() {
  const router = useRouter()
  return (
    <div className="max-lg:mt-[67px]  bg-none w-[100%] mt-[105px] z-20">
      <div className='h-[430px] bg-header w-full bg-no-repeat'/>
      <div className="mt-[-445px] py-[15px] max-lg:px-[30px] max-xl:pl-[50px] max-2xl:pl-[100px] container pl-[154px] mx-auto max-w-[1728px]" >
        <div className='max-lg:text-center max-lg:mt-[67px] max-lg:flex-col flex flex-row items-center'>
          <div className='max-sm:max-w-[252px] max-sm:mx-auto max-xl:max-w-[400px] max-w-[537px]'>
            <h1 className='max-sm:mb-0 max-sm:text-[25px] max-xl:mb-[20px] max-xl:text-[40px] mb-[40px]'>CARE AND COMPASSION FOR OUR ELDERLY</h1>
            <div className='max-lg:hidden'>
              <p className=' max-xl:mb-[20px] max-lg:leading-[26px] max-xl:leading-[36px] text-[36px] leading-[43.88px] max-xl:text-[26px] max-lg:text-[20px] mb-[90px]'>Breaking down barriers to accessing excellent physiotherapy.</p>
              <div className='relative max-lg:w-[162px] max-lg:mx-auto'>
                <Image src={button} alt='' className='absolute left-0 max-xl:w-[161px] h-auto' />
                <button className='absolute left-0 max-xl:h-[45px] max-xl:w-[161px] max-xl:text-[20px] bg-[#02198E] w-[335px] h-[94px] text-[#F5F7FF] rounded-[19px] hover:opacity-70'>
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          <div className=' max-sm:w-[320px] max-sm:h-[296px] max-lg:mx-auto max-lg:mt-[44px] max-lg:w-[400px] max-lg:h-[400px] max-xl:h-[500px] max-2xl:h-[700px] relative w-[100%] h-[858px] bg-none '>
            <Image className='absolute top-0 right-0 h-[100%] w-auto rounded-[50%]' src={sectionbg1} alt=''/>
            <Image className='absolute top-0 right-[13%] h-[100%] w-auto ' src={sectionbg2} alt=''/>
            <Image className='absolute top-[30%] right-[21%] h-[56%] w-auto rounded-[10%] ' src={sectionbg3} alt=''/>
            <Image className='absolute top-[25%] right-[18%] h-[56%] w-auto rounded-[10%]' src={section1} alt=''/>
            <Image className='absolute top-[63%] right-[75%] h-[8%] w-auto rounded-[10%]' src={star} alt=''/>
          </div>
          <div className=' lg:hidden max-w-[252px] mx-auto mt-[50px] text-[17px] leading-[21px] mb-[40px]'>
              <p className='mb-[50px]'>Breaking down barriers to accessing excellent physiotherapy.</p>
              <div className='relative max-lg:w-[162px] max-lg:h-70px max-lg:mx-auto'>
                <Image src={button} alt='' className='absolute left-0 max-xl:w-[161px] h-auto' />
                <button className='absolute left-0 max-xl:h-[45px] max-xl:w-[161px] max-xl:text-[19px] bg-[#02198E] w-[335px] h-[94px] text-[#F5F7FF] rounded-[19px] hover:opacity-70'>
                  Get in Touch
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

