import React from 'react'
import logo from "../images/onDark.png"
import background from "../images/2_0000 12.png"

const HeroSection8 = () => {
  return (
    <div>
      <div className='w-full flex max-w-[1280px] mx-auto justify-between items-center h-[96px]'>
        <div>
          <img className='w-[90px] h-[36px]' src={logo}></img>
        </div>

        <div className='flex items-center space-x-10'>
          <ul className='flex items-center space-x-10'>
            <li className='hover:underline hover:text-blue-500 font-Poppins'> About Us </li>
            <li className='hover:underline hover:text-blue-500 font-Poppins'>Offers</li>
            <li className='hover:underline hover:text-blue-500 font-Poppins'>Contact</li>
          </ul>
        </div>
        <div>
          <button className='h-[40px] text-white bg-indigo-500 rounded-md px-4'>
            Login
          </button>
        </div>
      </div>
      <div className='w-full max-w-[1280px] mx-auto flex flex-row justify-between '>
        <div className='bg-indigo-50 w-[669px] h-[600px]'>

          <div className='flex flex-col py-40 mx-auto max-w-[360px]'>
            <h1 className='font-bold font-Poppins leading-[120%] text-[40px]'>
              Make it <br></br>
              simple, but <br></br>
              significant
            </h1>

            <p className='font-Poppins leading-[180%] mt-4'>
              The public is more familiar with bad
              design than good design. it is, in effect,
              conditioned to prefer bad design
            </p>

            <button className='h-[40px] bg-indigo-500 px-4 rounded-md mt-4 w-[150px] text-white'>
              Get Started
            </button>

          </div>

        </div>
        <div>
          <img className='w-[669px] h-[600px]' src={background}></img>
        </div>
      </div>
    </div>
  )
}

export default HeroSection8