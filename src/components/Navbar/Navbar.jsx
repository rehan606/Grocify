import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className='bg-white fixed top-0 left-0 right-0 shadow'>
        <nav className=' max-w-1400 mx-auto md:h-[14vh] h-[12vh] px-10 flex items-center justify-between '>
            {/* Logo */}
            <a href='#' className="text-2xl font-bold ">Gr<span className="text-orange-500">o</span>cify</a>

            {/* Desktop Menu  */}
            <ul className="hidden lg:flex space-x-6 ">
                <li><a href="#" className="hover:text-orange-500 text-orange-500 transition-all tracking-wider ">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">Services</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">Contact</a></li>
            </ul>

            {/* Navbar Action  */} 
            <div className='flex items-center gap-x-4 ml-6'>
                <div className='p-1 items-center rounded-full border border-orange-400 hidden lg:flex '>
                    <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 outline-none' />

                    <button className='w-10 h-10 text-xl text-white rounded-full bg-linear-to-b from-orange-400 to-orange-500 flex items-center justify-center '><IoSearchSharp /></button>

                </div>
                <a href="#" className="text-zink-800 text-2xl transition">
                    <GoHeartFill />
                </a>
                <a href="#" className="text-zink-800 text-2xl transition">
                    <HiShoppingBag />
                </a>

                {/* Hamburger Icon */}
                <a href="#" className="text-zink-800 text-2xl transition lg:hidden">
                    <TbMenu2 />
                </a>
            </div>

            {/* Mobile Menu  */}
            <ul className="flex flex-col md:hidden space-y-6 bg-orange-400 backdrop-blur-2xl absolute p-10 top-30 left-1/2 transform -translate-x-1/2 ">
                <li><a href="#" className="hover:text-orange-500 text-orange-500 transition-all tracking-wider ">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">Services</a></li>
                <li><a href="#" className="hover:text-orange-500 transition tracking-wider text-zink-800 ">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
