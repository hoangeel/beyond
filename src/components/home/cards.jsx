"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import icon1 from "../../assets/img/icon1.png"
import icon2 from "../../assets/img/icon2.png"
import icon3 from "../../assets/img/icon3.png"
import boxCard from "../../assets/img/boxCard.png"




export default function Cards() {
  const router = useRouter()
  return (
    <div className=" bg-[#0A3DA6] w-[100%] ">
      <div className="pt-[179px] pb-[130px] mx-auto max-w-[1728px] max-sm:px-[30px]  max-xl:px-[60px] max-2xl:px-[100px] container px-[154px]" >
          <div className='max-lg:grid-cols-1 max-xl:grid-cols-2 grid grid-cols-3 max-sm:space-y-[100px] max-lg:space-y-[130px]'>
            <div className='max-sm:max-w-[239px] max-sm:mx-auto relative max-w-[432px] max-xl:mx-auto'>
              <div className='flex justify-center '>
                <Image src={boxCard}  alt='' className='max-lg:hidden h-[338px] w-auto absolute bottom-[0px]'/>
                <div className='max-sm:min-h-[276px] max-sm:pt-[78px] max-sm:px-[44px] max-sm:text-[20px] max-sm:leading-[24px] max-lg:min-h-[432px] max-xl:min-h-[477px] pb-[40px] relative min-h-[432px] pt-[146px] px-[56px] text-center bg-[#D6F7F3] rounded-[72px] font-[500] text-[30px] leading-[37px] max-w-[423px] mx-auto'>This differs starkly from private physiotherapy.</div>
              </div>
              <div className='max-sm:top-[-60px] w-full absolute top-[-95px] flex justify-center'>
                <div className='max-sm:border-[12px] max-sm:w-[125px] max-sm:h-[125px] bg-[#1BF9F9] h-[190px] w-[190px] rounded-[50%] flex justify-center text-center items-center mx-auto border-[20px] border-solid border-[#0A3DA6]'>
                  <Image src={icon1} alt='' className='max-sm:w-[45px] max-sm:h-auto' />
                </div>
              </div>
            </div>
            <div className='max-sm:max-w-[239px] max-sm:mx-auto relative mx-[20px] max-xl:mx-auto'>
              <div className='flex justify-center'>
                <Image src={boxCard}  alt='' className='max-lg:hidden h-[338px] w-auto absolute bottom-[-55px]'/>
                <div className='max-sm:pt-[78px] max-sm:px-[20px] max-sm:text-[20px] max-sm:leading-[24px] pb-[40px] relative  pt-[104px] max-lg:px-[30px] px-[69px] text-center bg-[#D6F7F3] rounded-[72px] font-[500] text-[30px] leading-[37px] max-w-[423px] mx-auto'>The current NDIS rate translates into a standard rate of $193.99/hour. Aged care is very similar to this. Travel fees can also be added to this.</div>
              </div>
              <div className='max-sm:top-[-60px] w-full absolute top-[-95px] flex justify-center'>
                <div className='max-sm:border-[12px] max-sm:w-[125px] max-sm:h-[125px] bg-[#1BF9F9]  h-[190px] w-[190px] rounded-[50%] flex justify-center text-center items-center mx-auto border-[20px] border-solid border-[#0A3DA6]'>
                  <Image src={icon2} alt='' className='max-sm:w-[45px] max-sm:h-auto' />
                </div>
              </div>
              <div className='max-xl:hidden w-[4px] h-[265px] border-[2px] border-dashed border-[#24FED7] absolute right-[-15px] top-[75px]'/>
              <div className='max-xl:hidden w-[4px] h-[265px] border-[2px] border-dashed border-[#24FED7] absolute left-[-15px] top-[75px]'/>
            </div>
            <div className='max-sm:max-w-[239px] max-sm:mx-auto relative max-w-[432px] ml-auto  max-xl:mx-auto max-xl:mt-[150px]'>
              <div className='flex justify-center'>
                <Image src={boxCard}  alt='' className='max-lg:hidden h-[338px] w-auto absolute bottom-[-90px]'/>
                <div className='max-sm:pt-[78px] max-sm:px-[20px] max-sm:text-[20px] max-sm:leading-[24px] pb-[40px] relative  pt-[132px] px-[56px] text-center bg-[#D6F7F3] rounded-[72px] font-[500] text-[30px] leading-[37px] max-w-[423px] mx-auto'>NDIS and Aged Care Physiotherapy rates are prohibitive. They generate financial barriers which do not allow many patients to receive long term effective care.</div>
              </div>
              <div className='max-sm:top-[-60px] w-full absolute top-[-95px] flex justify-center'>
                <div className='max-sm:border-[12px] max-sm:w-[125px] max-sm:h-[125px] bg-[#1BF9F9] h-[190px] w-[190px] rounded-[50%] flex justify-center text-center items-center mx-auto border-[20px] border-solid border-[#0A3DA6]'>
                  <Image src={icon3} alt='' className='max-sm:w-[45px] max-sm:h-auto' />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

