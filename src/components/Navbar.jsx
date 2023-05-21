import React, { useState } from 'react'
import { Logo } from './Icons'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <nav className='bg-yellow-400 flex justify-around items-center py-2 shadow-lg'>
        <Logo />
        <div className='flex items-center gap-3'>
            <div>
              {
                darkMode ? <BsFillMoonFill className='text-2xl cursor-pointer' onClick={() => setDarkMode(!darkMode)} /> : <BsFillSunFill className='text-2xl cursor-pointer' onClick={() => setDarkMode(!darkMode)}/>
              }
            </div>
            {/* <label className='bg-gray-400 w-16 h-6 rounded-2xl cursor-pointer flex items-center p-[2px] shadow-md'>
                <input type='checkbox' className='check-switch' hidden/>
                <span className='w-5 h-5 rounded-3xl bg-white slider transition-all duration-500'></span>
            </label> */}
        </div>
    </nav>
  )
}

export default Navbar