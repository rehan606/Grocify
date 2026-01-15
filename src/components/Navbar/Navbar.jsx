import React, { useEffect, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2 , TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Menu toggle function
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Menu close function (call when click link)
    const closeMenu = () => setShowMenu(false);

    // scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (

        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-md' : ''} transition-all`}>
            <nav className=' max-w-1400 mx-auto md:h-[14vh] h-[12vh] px-10 flex items-center justify-between '>
                {/* Logo */}
                <Link href='/' className="text-2xl font-bold ">Gr<span className="text-orange-500">o</span>cify</Link>

                {/* Desktop Menu  */}
                <ul className="hidden lg:flex space-x-6 ">
                    
                    <li><NavLink to={'/'} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Home</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>About</NavLink></li>
                    <li><NavLink to={'/services'} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Services</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Contact</NavLink></li>
                </ul>

                {/* Navbar Action  */} 
                <div className='flex items-center gap-x-4 ml-6'>
                    <div className='p-1 items-center rounded-full border border-orange-400 hidden lg:flex '>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 outline-none' />

                        <button className='w-10 h-10 text-xl text-white rounded-full bg-linear-to-b from-orange-400 to-orange-500 flex items-center justify-center cursor-pointer'><IoSearchSharp /></button>

                    </div>
                    <a href="#" className="text-zink-800 text-2xl transition">
                        <GoHeartFill />
                    </a>
                    <a href="#" className="text-zink-800 text-2xl transition">
                        <HiShoppingBag />
                    </a>

                    {/* Hamburger Icon */}
                    <a href="#" className="text-zink-800 text-2xl transition lg:hidden " onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <TbMenu2 /> }
                    </a>
                </div>

                {/* Mobile Menu  */}
                <ul className={`flex flex-col lg:hidden space-y-6 bg-linear-to-b from-white to-orange-200/50 border border-orange-200 backdrop-blur-lg rounded-xl absolute p-10 top-20  md:top-24 -left-full transform -translate-x-1/2 items-center shadow-lg transition-all duration-500 ${showMenu ? 'left-1/2' :""}`}>

                    <li><NavLink to='/'  onClick={closeMenu} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Home </NavLink> </li>
                    <li><NavLink to='/about' onClick={closeMenu} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>About</NavLink> </li>
                    <li><NavLink to='/services' onClick={closeMenu} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Services</NavLink> </li>
                    <li><NavLink to='/contact' onClick={closeMenu} className={({ isActive }) =>
                            isActive ? "text-orange-500 font-bold" : "text-zinc-800"
                            }>Contact</NavLink> </li>

                    <li className='p-1 items-center rounded-full border border-orange-400 flex'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 outline-none'  />

                        <button className='w-10 h-10 text-xl text-white rounded-full bg-linear-to-b from-orange-400 to-orange-500 flex items-center justify-center '><IoSearchSharp /></button>

                    </li> 
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
