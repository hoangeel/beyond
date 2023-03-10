"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logo from "../../assets/img/FooterLogo.png"
import icon1 from "../../assets/img/Vector3.png"
import icon2 from "../../assets/img/Vector2.png"
import logoBg from "../../assets/img/FadedLogo.png"


export default function Footer() {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-[#FFFFFF] pt-[283px] max-lg:pt-[202px] relative">
      <div className="w-full h-full bg-[#DAEDF8]  mb-[342px] max-lg:mb-[67px]">
        <div className='max-sm:pt-[11px] pt-[53px] pb-[78px] max-lg:px-[30px] max-xl:px-[50px] max-2xl:px-[100px] container px-[154px] mx-auto max-w-[1728px]'>
          <h2 className='max-lg:text-[40px] max-lg:leading-[48px] max-lg:max-w-[221px] max-w-[350px] mx-auto'>GET IN TOUCH</h2>
          <div className='max-lg:mt-[90px] max-lg:mb-[60px] max-lg:flex-col flex flex-row justify-center items-center mb-[62px] mt-[10px] hover:cursor-pointer hover:opacity-70'>
            <div className='max-lg:w-[35px] max-lg:h-[34px] max-lg:m-0 bg-[#06269A] rounded-[50%] w-[102px] h-[99px] flex justify-center items-center mr-[37px] '><Image src={icon1} alt='' className='max-lg:h-[14px] max-lg:w-[17px]'/></div>
            <p className=' max-lg:text-[18px] max-xl:text-[40px] max-2xl:mr-0 mr-[136px] font-[600px] leading-[61px] text-[#0D2373] text-[50px]' >Beyondhomedisability@gmail.com</p>
          </div>
          <div className='max-lg:flex-col flex flex-row items-center justify-center hover:cursor-pointer hover:opacity-70'>
            <div className='max-lg:w-[35px] max-lg:h-[34px] max-lg:m-0 bg-[#06269A] rounded-[50%] w-[102px] h-[99px] flex justify-center items-center mr-[37px]'><Image src={icon2} alt='' className='max-lg:h-[14px] max-lg:w-[17px]'/></div>
            <p className='max-lg:text-[25px] max-xl:text-[40px] max-2xl:mr-0 mr-[136px] font-[600px] leading-[61px] text-[#0D2373] text-[50px]'>0436  275  501</p>
          </div>
        </div>
      </div>
      <Image src={logoBg} alt='' className='absolute top-[130px] right-0 max-sm:top-[48px] max-sm:w-[519px] h-auto'/>
      <div className='max-sm:py-[10px] max-sm:px-[30px] px-[104px] pt-[39px] pb-[23px] bg-[#0C2251] '><Image src={logo} alt='' className='hover:opacity-70 hover:cursor-pointer max-lg:h-[28px] w-auto'/></div>
    </div>
  )
}

