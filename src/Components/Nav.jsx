import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-screen h-[6vh] fixed z-200 bg-white shadow-md border-b border-gray-200 flex items-center justify-between px-12 py-8'>
      {/* Logo */}
      <div className="Part1 w-[20%]  flex justify-center items-center">  
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F352-3523121_new-travel-peeps-travel-agency-logo-png-clipart.png&f=1&nofb=1&ipt=438acacbc241d3170853bcf633d8215bfe825cb4341b6c24ca999643e15cd321"
          alt="Logo"
          className=' w-[5vw] cursor-pointer'
        />
      </div>

    
      <div className="Part2 hidden md:flex w-[60%] justify-center">
        <ol className='flex text-md font-medium text-gray-700'>
          <li className='mx-4 cursor-pointer hover:text-[#937A4B] transition duration-300'>Home</li>
          <li className='mx-4 cursor-pointer hover:text-[#937A4B] transition duration-300'>About</li>
          <li className='mx-4 cursor-pointer hover:text-[#937A4B] transition duration-300'>Destinations</li>
          <li className='mx-4 cursor-pointer hover:text-[#937A4B] transition duration-300'>Services</li>
          <li className='mx-4 cursor-pointer hover:text-[#937A4B] transition duration-300'>Contact</li>
        </ol>
      </div>


      <div className="Part3 hidden md:flex w-[20%] justify-end">
        <button className='bg-[#937A4B] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#7a623b] transition duration-300'>
          Join Now
        </button>
      </div>


      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


      {isMenuOpen && (
        <div className="absolute top-[6vh] left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center py-4">
          <ol className='flex flex-col text-md font-medium text-gray-700'>
            <li className='my-2 cursor-pointer hover:text-[#937A4B] transition duration-300'>Home</li>
            <li className='my-2 cursor-pointer hover:text-[#937A4B] transition duration-300'>About</li>
            <li className='my-2 cursor-pointer hover:text-[#937A4B] transition duration-300'>Destinations</li>
            <li className='my-2 cursor-pointer hover:text-[#937A4B] transition duration-300'>Services</li>
            <li className='my-2 cursor-pointer hover:text-[#937A4B] transition duration-300'>Contact</li>
          </ol>
          <button className='bg-[#937A4B] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#7a623b] transition duration-300 mt-4'>
            Join Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav