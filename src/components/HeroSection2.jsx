import React from 'react'
import logo from "../images/onDark.png"
import image from "../images/Image.png"
 import bimage from "../images/bgimage.png"

const HeroSection2 = () => {
  return (
    <div className='h-[600px] bg-no-repeat bg-cover ' style={{backgroundImage:`url(${bimage})`}}>
      <div className=" relative flex w-full max-w-[1080px] h-[96px] items-center justify-between mx-auto">
         <div className="flex items-center space-x-44">
            
              <img className="w-[90px] h-[36px]" src={logo}></img>

                <ul className='flex space-x-16 items-center '>
                    <li className="hover:underline hover:text-blue-800 font-poppins">Product</li>
                    <li  className="hover:underline hover:text-blue-800 font-Poppins">Features</li>
                    <li  className="hover:underline hover:text-blue-800 font-Poppins">Marketplace</li>
                    <li  className="hover:underline hover:text-blue-800 font-Poppins">Company</li>
                </ul>
         </div>
         <div className='flex space-x-8'>
         <button className="h-[40px] font-sm px-4 rounded-md bg-indigo-500 text-white font-Poppins">
            Watch Demo
         </button>

         <button className="h-[40px] font-medium px-4 rounded-md border font-Poppins ">
            Sign Up
         </button>
         </div>
       </div>

       <div className='flex flex-col items-center mx-auto py-12 w-full max-w-[800px] h-[223px]'>

        <h1 className='font-bold text-[56px] leading-[120%] font-Poppins '>
        Build Better Product</h1>

        <p className=' flex text-[20px] text-gray-600 leading-[180%] text-center font-Poppins'>
           Powerful, self-serve product analytics to help you convert,<br></br>
           engage,and retain more users

        </p>

        <div className='flex space-x-4 mt-4'>
        <button className='h-[40px] font-sm px-4 rounded-md bg-indigo-500 text-white font-Poppins'>
            Watch Demo
        </button>
        
        <button className='h-[40px] font-medium px-4 rounded-md border font-Poppins'>
           Sign Up
        </button>
        </div>
        
        <div className='max-w-[1200px]'>
        <img className='w-[836px] h-[585px]' src={image}></img>
        </div>

       </div>
    </div>
  )
}

export default HeroSection2