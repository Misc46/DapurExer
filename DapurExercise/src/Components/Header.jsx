import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import teras from '/allIcon.png';
import chicken from '/chickenIcon.png';
import fish from '/fishIcon.png';
import beef from '/beefIcon.png';
import salad from '/saladIcon.png';
import all from '/allIcon.png';
import exit from '/exitIcon.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => setShowMenu(!showMenu);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.location.reload(); // Force page refresh
    };

    return (
        <div>
            <div className='w-full h-15 bg-[#c52525] flex flex-stretch items-center justify-between'>
                <div onClick={handleClick} className='mx-4 hover:scale-125 transition-all duration-200'>
                    <IconContext.Provider value={{ color: "white", size:"25" }}>
                        <FaBars />
                    </IconContext.Provider>
                </div>
                <h1 className='text-xl text-white mx-4'>
                    Teras Rumah <span className="text-lime-400">Nenek</span>
                </h1>
            </div>

            <div className={showMenu ? 'fixed top-0 left-0 h-screen w-full md:w-1/4 bg-linear-to-b from-[#D42926] to-[#6E1514] text-white z-50 rounded-r-2xl text-xl' : 'hidden'}>
                <div className='py-6 flex flex-col items-center gap-4'>
                <button onClick={handleClick} href='#' className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={exit} alt='Teras Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Go Back</span>
                    </button>
                    <button onClick={() => handleNavigation('/')}
                        href='#' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={teras} alt='Teras Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Home</span>
                    </button>
                    <button onClick={() => handleNavigation('/category/Beef')}
                        href='#'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={beef} alt='Beef Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Beef</span>
                    </button>
                    <button onClick={() => handleNavigation('/category/Chicken')}
                        href='#' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={chicken} alt='Chicken Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Chicken</span>
                    </button>
                    <button onClick={() => handleNavigation('/category/Seafood')} 
                        href='#' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={fish} alt='Fish Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Seafood</span>
                    </button>
                    <button onClick={() => handleNavigation('/category/Vegan')} 
                        href='#'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={salad} alt='Salad Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Vegetables</span>
                    </button>
                    <button onClick={() => handleNavigation('/category/all')}
                        href='#'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={all} alt='All Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>All</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
