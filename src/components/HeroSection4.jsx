import React from 'react'
import logo from "../images/logo.png";

const HeroSection4 = () => {
  return (
    <div className=''>
        <div className='w-full max-w-[1080px] flex mx-auto relative items-center justify-between h-[96px]'>

            <div className=' items-center'>
        
                <img className='h-[36px] w-[90px]' src={logo}></img>

            </div>
            <div className=''>
                <ul className='flex items-center space-x-12 justify-between'>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Product</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Features</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Marketplace</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Company</li>
                </ul>
            </div>
        </div>
        <div className='max-w-[1080px] h-[0.25px] mx-auto  bg-slate-300 '></div>

        <div className='flex flex-col max-w-[800px] h-[223px] mx-auto py-32 text-center items-center'>
            <h1 className='text-[56px] font-Poppins font-bold leading-[120%]'>
                 Your business phone, reimagined.
            </h1>

            <p className=' flex text-[18px] text-gray-600 leading-[120%] text-center font-Poppins mx-auto mt-2'>
               Dlex adds a work phone number to your existing devices.
              <br></br> No need to carry two phones or extra SIM cards
            </p>

            <button className='h-[40px] bg-indigo-500 px-4 rounded-md font-Poppins mt-6 text-white'>
                Purchase for $58
            </button>

            <a href='' className='text-blue-500 mt-4'>Learn more</a>
        </div>

    </div>
  )
}

export default HeroSection4