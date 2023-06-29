import React from 'react'
import logo from "../images/logo.png"
import image from "../images/men.png"

const HeroSection3 = () => {
  return (
    <div>
        <div className='flex  relative w-full max-w-[1080px] h-[96px] items-center  justify-between mx-auto '>
            <div className='flex items-center justify-between'>

               <img className='w-[90px] h-[36px]' src={logo}></img>

                <div className='flex items-center '>
               <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
               <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
               <path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>
               </div>
            </div>
        </div>
        
        <div className='flex flex-row w-full max-w-[1080px] mx-auto items-center justify-between py-14 px-7'>
            <div>
                <button className='rounded-full px-4 text-[10px] font-Poppins h-[20px] text-lightyellow bg-yellow-50 '>Premiun Product</button>

                <h1 className='text-[44px] font-Poppins font-bold leading-[120%] mt-4'>Design is intelligence <br></br> made visible</h1>

                <p className='flex text-[20px] text-gray-600 leading-[180%]  font-Poppins mt-4'>
                Build alongside half a million developers and <br></br> bussiness like you</p>

                <div className='flex space-x-4 mt-4'>

                <input type='email'
                     placeholder='Email address'
                     className='w-72 border rounded-md'
                />
                
               
                   <button className='h-[40px] rounded-md px-4 bg-indigo-500 text-white font-Poppins'>Start Free Trial</button>
                </div>
               
                <p className='font-Poppins text-[12px] leading-[180%] opacity-40 mt-4'>
                    Try Dlex free for 14 days no credit card required By entering your email,you agree to <br></br>receive marketing email from Dlex
                </p>
            </div>
        </div>
        <div className='flex right-0 top-0 absolute'>
            <img className='w-[650px] h-[750px]' src={image}></img>
        </div>

    </div>
  )
}

export default HeroSection3