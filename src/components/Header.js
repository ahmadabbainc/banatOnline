import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0' >
          <img
          loading="lazy"
            onClick={() => router.push('/')}
            src="https://ams03pap001files.storage.live.com/y4m4MlfG9Pv64QvDvUEG8KBzvVQHcqaZN17CKlZJ16qOxJJrlAJV7pOfPonDV17AwV5_h2A3lvt2mks-GGxC3bMhe753BtQAkf6Z5VTFFl9ZeX5OzWMv_J2tdyBkjn6BYCXB2sTeplSMLQaMx6Osadjw3JK97Gt5sy4n1diUOAz_TFS5Fpoj5p_rSJF2J2bPFTS?width=416&height=129&cropmode=none"
            width={170}
            height={10}
            alt="logo"
            objectFit="contain"
            className="cursor-pointer" />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        {/* Right side */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div onClick={!session ? signIn : signOut} className='link hover:underline'>
            <p>
              {session ? `Hello, ${session.user.name}` : "Hello, Sign in"}
            </p>
            <p className='font-extrabold md:text-sm'>Account and list</p>
          </div>
          <div className='link hover:underline hover:underline'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Oders</p>
          </div>
          <div onClick={() => router.push('/checkout')} className='link relative hover:underline flex items-center'>
            <span className='absolute top-0 right-0 md:right-4 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <p className=' hidden md:inline font-extrabold mt-2 md:text-sm'>Cart</p>

          </div>
        </div>
      </div>
      {/* Buttom Nav */}
      <div className='flex items-center bg-amazon_blue-light space-x-3 p2 pl-6 text-white text-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 mr-1 link">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <p className='link hover:underline flex items-center'>All</p>
        <p className='link  hover:underline flex items-center'>Today's Deal</p>
        <p className='link  hover:underline flex items-center'>12 Days of Deal</p>
        <p className='link hidden lg:inline-flex hover:underline flex items-center'>Customer Service</p>
        <p className='link hidden lg:inline-flex hover:underline flex items-center'>Registry</p>
        <p className='link hidden lg:inline-flex hover:underline flex items-center'>Gift Cards</p>
        <p className='link hidden lg:inline-flex hover:underline flex items-center'>Sell</p>
      </div>
    </header>
  )
}

export default Header;
