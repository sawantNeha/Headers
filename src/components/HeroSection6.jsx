import React from 'react'
import logo from "../images/onDark.png"
import bubble from "../images/bubbles.png"
import stackarea from "../images/Stacked Area Up.png"

const HeroSection6 = () => {
  return (
    <div>
        <div className='w-full max-w-[1080px] flex justify-between mx-auto items-center h-[96px]'>
            <div>
                <img className='w-[90px] h-[36px]' src={logo}/>
            </div>
            <div className='flex space-x-8 items-center z-10'>
                <ul className='flex space-x-8'>
                    <li className='hover:underline hover:text-blue-500 font-Poppins'>Product</li>
                    <li className='hover:underline hover:text-blue-500 font-Poppins'>Features</li>
                    <li className='hover:underline hover:text-blue-500 font-Poppins'>Marketplace</li>
                    <li className='hover:underline hover:text-blue-500 font-Poppins'>Company</li>
                </ul>
                <button className='font-Poppins rounded-md font-medium'>
                    Sign In
                </button>
                <button className='font-Poppins text-white rounded-md px-4 bg-indigo-500 h-[40px]'>
                    Sign Up
                </button>
            </div>
        </div>

        <div className='flex flex-row w-full max-w-[1080px] mx-auto justify-between py-14 '>
            <div className='w-[456px] h-[369px] z-10'>
            <h1 className='text-[50px] font-bold font-Poppins leading-[120%]'>
                        Design is
                        intelligence
                        made
                        visible.
            </h1>
            <p className='font-Poppins leading-[180%] opacity-70'>
                Build alongside half a millions developers and bussinesses like you.
            </p>

            <button className='rounded-md bg-indigo-500 text-white h-[40px] px-4 mt-2'>
                Get Started
            </button>
            </div>
            
            <div className=''>
                <img className='absolute right-0 top-0 h-[629px] w-[950] object-contain' src={bubble}/>
            </div>          
        </div>
        <div className='grid grid-cols-3 gap-4 mx-auto max-w-[1080px] mt-20'>

                 <div className='w-[360px] '>
                    <img className=' w-[30px] h-[30px]' src={stackarea}></img>
                    <div className='space-y-3 mt-2'>
                        <h1 className='font-bold font-Poppins'>Cloud Storage</h1>
                        <p className='font-Poppins text-sm mt-2 opacity-70'>
                            leverages globally distributed age catches to accelarate content delivery lipsum.
                        </p>
                        <a href='' className='text-indigo-500 flex font-Poppins mt-2 font-medium text-sm'>Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                        </a>
                    </div>
                 </div>

                 <div className='w-[360pxpx] '>
                    <img className=' w-[30px] h-[30px]' src={stackarea}></img>
                    <div className='space-y-3 mt-2'>
                        <h1 className='font-bold font-Poppins'>Image AI analysis</h1>
                        <p className='font-Poppins text-sm mt-2 opacity-70'>
                            leverages globally distributed age catches to accelarate content delivery lipsum.
                        </p>
                        <a href='' className='text-indigo-500 flex font-Poppins mt-2 font-medium text-sm'>Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                        </a>
                    </div>
                 </div>

                 <div className='w-[360px] '>
                    <img className=' w-[30px] h-[30px]' src={stackarea}></img>
                    <div className='space-y-3 mt-2'>
                        <h1 className='font-bold font-Poppins'>Image processing</h1>
                        <p className='font-Poppins text-sm mt-2 opacity-70'>
                            leverages globally distributed age catches to accelarate content delivery lipsum.
                        </p>
                        <a href='' className='text-indigo-500 flex font-Poppins mt-2 font-medium text-sm'>Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                        </a>
                    </div>
                 </div>

        </div>
    </div>
  )
}

export default HeroSection6