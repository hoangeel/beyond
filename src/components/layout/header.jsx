"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import logo from "../../assets/img/logo.png"
import button from "../../assets/img/boxButton.png"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Aged Care', href: '/aged-care', current: false },
  { name: 'NDIS', href: '/ndis', current: false },
  { name: 'Contact', href: '/contact', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  
  return (
    <>
      <div className="bg-[#FFFFFF] absolute top-[0px] w-[100%] z-10">
        <div className="max-lg:px-[30px] max-xl:px-[50px] max-xl:space-x-[50px] max-2xl:px-[100px] max-2xl:space-x-[100px] space-x-[144px] flex flex-row container px-[154px] mx-auto max-w-[1728px] py-[15px] items-center max-xl:text-[20px] text-[25px] font-[500] leading-[30px]" >
          <Image onClick={() => router.push("./")} className="max-lg:h-[37px] max-lg:w-auto mr-auto hover:cursor-pointer hover:opacity-70" src={logo} alt=""/>
          <a href="/" className='max-lg:hidden hover:cursor-pointer hover:opacity-70'>Home</a>
          <a href="/aged-care" className='max-lg:hidden hover:cursor-pointer hover:opacity-70'>Aged Care</a>
          <a href="/ndis" className='max-lg:hidden hover:cursor-pointer hover:opacity-70'>NDIS</a>
          <div className='max-lg:hidden relative max-lg:w-[162px] max-lg:h-70px max-lg:mx-auto'>
            <Image src={button} alt='' className='absolute top-[20px] left-0 w-[169px] h-auto z-10' />
            <button className='relative z-50  mr-[28px] bg-[#02198E] w-[169px] h-[62px] text-[#F5F7FF] rounded-[19px] hover:opacity-70'>Contact</button>
          </div>
        </div>
      
        <Disclosure >
        {({ open }) => (
          <>
            <div>
                <div className="w-[30px] h-[30px] lg:hidden text-right absolute top-[5px] right-[30px]">
                  <Disclosure.Button className=" bg-[#FBF9F9] rounded-[8px] w-[30px] h-[30px] justify-center border-[#E8FCF7] border-[1px] border-solid hover:cursor-pointer hover:opacity-70">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="w-[15px] h-auto mx-auto" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="w-[15px] h-auto mx-auto" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden text-right pr-[15px] bg-black ">
              <div className="">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer hover:opacity-70 '
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
        </Disclosure>
      </div>
    </>
  )
}

