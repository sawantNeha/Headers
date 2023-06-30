import React from 'react'
import logo from "../images/onDark.png"
import icon from "../images/icon.png"
import memoji from "../images/memoji.png"
import rectangle from "../images/Rectangle 3.png"
import send from "../images/send.png"
import successfull from "../images/successfullsent.png"
import voucher from "../images/voucher.png"
const HeroSection5 = () => {
  return (
    <div>
        <div className='w-full max-w-[1080px] h-[96px] mx-auto flex items-center justify-between relative'>
            <div className='flex items-center space-x-14'>
                <img className='w-[90px] h-[36px]' src={logo}></img>

                <ul className='flex items-center space-x-12'>

                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Product</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Features</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Marketplace</li>
                    <li className='hover:underline hover:text-blue-800 font-Poppins'>Company</li>

                </ul>
            </div>
            <div className='flex space-x-4 items-center'>
                <button className='h-[40px] font-medium px-4 rounded-md font-Poppins'>Sign In</button>

                <button className='h-[40px] px-4 rounded-md font-Poppins bg-indigo-500 text-white'>Sing Up</button>
            </div>
        </div>

        <div className='w-full max-w-[800] flex flex-col h-[223px] py-14 mx-auto items-center'>
             
            <h1 className='font-bold text-[50px] text-center font-Poppins leading-[120%]'>
                Have no fear of perfection,<br></br>
                you'll never reach it.
            </h1>
            <p className='text-[15px] opacity-70 leading-[180%] text-center font-Poppins mt-4'>
                Create interactive user flow diagrams that tell a story.
            </p>

            <img className='w-[800px] h-[500px]' src={rectangle}></img>
           
           
        </div>

        <img className='w-[120px] h-[120px] rotate-[-15deg] absolute left-32 top-44' src={icon}></img>
        
             <img className='w-[40px] h-[40px] absolute right-64 top-52 ' src={memoji}></img>
             <img className='w-[120px] h-[142px] absolute left-72' src={send}></img>
             <img className='w-[300px] h-[200px] absolute right-56 ' src={successfull}></img>
             <img className='w-[200px] h-[150px] absolute left-72 top-96' src={voucher}></img>
            
    </div>
  )
}

export default HeroSection5