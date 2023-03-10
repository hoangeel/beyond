"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import sectionbg1 from "../../assets/img/sectionbg1.jpg"
import sectionbg2 from "../../assets/img/sectionbg2.png"
import sectionbg3 from "../../assets/img/sectionbg3.jpg"
import section1 from "../../assets/img/section1.jpg"
import star from "../../assets/img/sectionstart.png"
import button from "../../assets/img/boxButton.png"



export default function Color() {
  const router = useRouter()
  return (
    <div className=" max-lg:mt-[69px]  max-lg:mb-[91px] bg-[#FFFFFF] mt-[300px] mb-[285px] w-[100%]  ">
      <div className="max-lg:space-y-[28px] space-y-[137px] max-lg:px-[30px] max-xl:px-[50px] max-2xl:px-[100px] container px-[154px] mx-auto max-w-[1728px]" >
        <div className='max-sm:gap-[17px] max-sm:leading-[24.5px] max-sm:text-[20px] max-lg:grid-cols-2 max-xl:text-[26px] max-2xl:text-[36px] grid grid-cols-4 items-center gap-[21px] leading-[49px] text-[40px] font-[500] text-[#000000]'>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#6BF8D6] h-[145px] text-center flex flex-col justify-center'>Cystic Fibrosis</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#FFEC8A] h-[145px] text-center flex flex-col justify-center'>Schizophrenia</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#9EFF9C] h-[145px] text-center flex flex-col justify-center'>Strokes</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#56B6EC] h-[145px] text-center flex flex-col justify-center'>Cerebral Palsy</div>
        </div>
        <div className='max-sm:gap-[17px] max-sm:leading-[24.5px] max-sm:text-[20px] max-lg:grid-cols-2 max-xl:text-[26px] max-2xl:text-[36px] grid grid-cols-4 items-center gap-[21px] leading-[49px] text-[40px] font-[500] text-[#000000]'>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#FFEC8A] h-[145px] text-center flex flex-col justify-center '>ABI</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#6BF8D6] h-[145px] text-center flex flex-col justify-center '>Down Syndrome</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#FFB8B8] h-[145px] text-center flex flex-col justify-center '>Parkinson’s Disease</div>
          <div className='max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#7BD8DE] h-[145px] text-center flex flex-col justify-center '>Multiple Sclerosis</div>
        </div>
        <div className='max-sm:gap-[17px] max-sm:leading-[24.5px] max-sm:text-[20px] max-lg:grid-cols-4 max-xl:text-[26px] max-2xl:text-[36px] grid grid-cols-8 items-center gap-[21px] leading-[49px] text-[40px] font-[500] text-[#000000]'>
          <div className='max-lg:col-start-1 col-start-2 col-span-2 max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#6BF8D6] h-[145px] text-center flex flex-col justify-center '>Multiple Sclerosis</div>
          <div className='col-span-2 max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#FAC4F5] h-[145px] text-center flex flex-col justify-center '>Restrictive Chest Disease</div>
          <div className='max-lg:col-start-2 col-span-2 max-sm:mb-[11px] max-sm:w-full max-sm:h-[67px] max-sm:py-[21.5px] bg-[#56B6EC] h-[145px] text-center flex flex-col justify-center '>Autism Spectrum Disorder</div>
        </div>
      </div>
    </div>
  )
}

