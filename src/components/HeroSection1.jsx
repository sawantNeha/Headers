import React from 'react'
import logo from "../images/logo.png";
import image from "../images/mobile.png"

const HeroSection1 = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-pink-100">
    <div className="flex w-full max-w-[1280px] h-[96px] justify-between items-center mx-auto">
      <div className="flex space-x-10 items-center">

        <img className="h-[36px] w-[90px]" src={logo}></img>

        <ul className="flex space-x-10">
          <li className="hover:underline hover:text-blue-800">Product</li>
          <li className="hover:underline hover:text-blue-800">Features</li>
          <li className="hover:underline hover:text-blue-800">Marketplace</li>
          <li className="hover:underline hover:text-blue-800">Company</li>
        </ul>
      </div>

      <button className="border h-[40px] px-4 rounded-md font-medium">Get Access</button>

    </div>

    <div className="flex flex-row w-full max-w-[1200px] mx-auto items-center justify-between py-14 px-7 ">

      {/* left section */}
      <div className="">
        <h1 className="text-[52px] font-bold leading-[120%]">
          The modern <br></br>
          way to build for <br></br>
          the web
        </h1>
        <p className="text-[16px] mt-4 leading-[180%]">
          Dlex empowers designers to build  professional,<br></br> custom websites in a completely visual canvas with no code.
        </p>
        <div className="space-x-4">
          <button className="mt-4 bg-indigo-500 px-[16px] py-[7px] rounded-md text-white">
            Get Started
          </button>

          <button className="px-[16px] py-[7px] rounded-md border">
            Learn more
          </button>
        </div>
      </div>

      {/* right section */}

      <div>
        <img className="w-[501px] h-[600px]" src={image}></img>
      </div>
    </div>

  </div>
  )
}

export default HeroSection1