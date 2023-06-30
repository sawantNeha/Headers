import React from 'react'
import logo from "../images/logo.png"
import transaction from "../images/Transaction.png"
import creditcard from "../images/Credit card.png"
import stackarea from "../images/Stacked Area Up.png"
import bggradient from "../images/bgGradient.png"

const HeroSection7 = () => {
    return (
        <div className=''>
            <div className='flex w-full max-w-[1080px] h-[96px] items-center mx-auto justify-between'>
                <div className='flex items-center space-x-52'>
                    <img className='w-[90px] h-[36px]' src={logo}></img>

                    <ul className='flex items-center space-x-8'>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Product</li>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Features</li>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Marketplace</li>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Company</li>
                    </ul>
                </div>
                <div className='space-x-6'>
                    <button className='font-Poppins h-[40px] px-4 rounded-md font-medium'>
                        Sign In
                    </button>
                    <button className='font-Poppins h-[40px] px-4 rounded-md bg-indigo-500 text-white'>
                        Sign Up
                    </button>
                </div>
            </div>

            <div className="flex flex-row w-full max-w-[1080px] mx-auto justify-between py-14  ">
                <div className='w-[456px]'>
                    <h1 className='text-[50px] font-bold font-Poppins leading-[120%]'>
                        Design is
                        intelligence made
                        visible.
                    </h1>

                    <p className='text-[20px] font-Poppins leading-[180%] text-gray-600  '>
                        Accept payment and move money globally with Strip's
                        powerfull APIs and software solution designed to help
                        you and capture more revenue.
                    </p>
                    <div className='flex mt-6 space-x-4'>
                        <button className='font-Poppins h-[40px] bg-indigo-500 rounded-md px-4 text-white'>
                            Start Now
                        </button>

                        <button className='rounded-md font-Poppins font-medium px-4'>
                            Contact Sales
                        </button>
                    </div>
                </div>

                <div>
                    <img className='relative w-[273px] h-[273px] z-10' src={transaction}></img>
                    <img className='absolute top-64 right-80 w-[350px] h-[250px] z-10' src={creditcard}></img>
                    <img className='absolute h-[600px] w-[600px] right-[7%] top-[10%] ' src={bggradient} />
                </div>
            </div>

            <div className='grid grid-cols-2 w-full gap-4 mt-4 mx-auto max-w-[1080px]'>

                <div className='flex space-x-3 w-[500px] '>
                    <img className=' w-[30px] h-[30px]' src={stackarea}></img>
                    <div className='space-y-3'>
                        <h1 className='font-bold font-Poppins'>Optimize your revenue</h1>
                        <p className='font-Poppins text-sm mt-2 opacity-70'>
                            Protect yourself from froud and increase authorization rates on  every payment
                            using our mashine learning and date from millions of businesses.
                        </p>
                        <a href='' className='text-blue-500 font-Poppins mt-4 text-sm'>Read more</a>
                    </div>
                </div>

                <div className='flex space-x-3 w-[500px]'>
                    <img className=' w-[30px] h-[30px]' src={stackarea}></img>
                    <div className='space-y-3'>
                        <h1 className='font-bold font-Poppins'>Payment for any business</h1>

                        <p className='font-Poppins text-sm mt-2 opacity-70'>
                            Protect yourself from froud and increase authorization rates on  every payment
                            using our mashine learning and date from millions of businesses.
                        </p>

                        <a href='' className='text-blue-500 font-Poppins mt-4 text-sm'>Read more</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection7