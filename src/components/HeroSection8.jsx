import React from 'react'
import logo from "../images/onDark.png"
import section8 from "../images/Section8.png"

const HeroSection8 = () => {
    return (
        <div>
            <div className='max-w-[1080px] w-full justify-between items-center mx-auto h-[96px] flex '>
                <div>
                    <img className='w-[90px] h-[36px]' src={logo} />
                </div>

                <div className='flex space-x-8 items-center'>
                    <ul className='flex space-x-8'>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>About Us</li>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Offers</li>
                        <li className='hover:underline hover:text-blue-500 font-Poppins'>Contact</li>
                    </ul>

                    <button className='font-Poppins px-4 bg-indigo-500 text-white rounded-md h-[40px]'>
                        Login
                    </button>
                </div>
            </div>

            <div className='flex max-w-[1080px] w-full items-center mx-auto mt-14'>
                <div className='w-[456px] h-[468px]'>
                    <h2 className='font-bold text-indigo-500 font-Poppins text-xl'>Explore</h2>

                    <h1 className='font-bold text-[40px] font-Poppins leading-[120%]'>Live or Travel Where ever you want.</h1>

                    <div className='grid grid-cols-2 max-w-[456px]  w-full gap-2 mt-4 mx-auto'>

                        <div>
                            <p className='font-Poppins text-sm text-gray-500'>Destination</p>
                            <input type='text'
                                placeholder='Barcelona'
                                className='border rounded-md px-2 mt-2'
                            />
                        </div>

                        <div>
                            <p className='font-Poppins text-sm text-gray-500'>Guest</p>
                            <input type='text'
                                placeholder='3 Adult'
                                className='border rounded-md px-2 mt-2'
                            />
                        </div>

                        <div>
                            <p className='font-Poppins text-sm text-gray-500'>Check in</p>
                            <input type='text'
                                placeholder='27 jul,2020'
                                className='border rounded-md px-2 mt-2'
                            />
                        </div>

                        <div >
                            <p className='font-Poppins text-sm text-gray-500'>Check out</p>
                            <input type='text'
                                placeholder='27 jul,2020'
                                className='border rounded-md px-2 mt-2'
                            />
                        </div>

                    </div>

                    <button className='font-Poppins bg-indigo-500 px-4 w-96 text-white mt-4 rounded-md h-[40px]'>Check Availability</button>

                </div>

                <div className='space-x-4'>
                    <img className='absolute w-[503px] h-[500px] top-32 right-72' src={section8}/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection8