import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import teras from '/terasIcon.png';
import chicken from '/chickenIcon.png';
import fish from '/fishIcon.png';
import beef from '/beefIcon.png';
import salad from '/saladIcon.png';
import all from '/allIcon.png';
import exit from '/exitIcon.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => setShowMenu(!showMenu);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.location.reload();
    };

    return (
        <div>
            <div className='w-full h-15 bg-[#c52525] flex flex-stretch items-center justify-between drop-shadow-lg'>
                <div onClick={handleClick} className='mx-4 hover:scale-125 transition-all duration-200'>
                    <IconContext.Provider value={{ color: "white", size:"25" }}>
                        <FaBars />
                    </IconContext.Provider>
                </div>
                <h1 className='text-xl text-white mx-4'>
                    Teras Rumah <span className="text-lime-400">Nenek</span>
                </h1>
            </div>

            <div className={showMenu ? 'fixed top-0 left-0 h-screen w-screen md:w-1/5 bg-linear-to-b from-[#D42926] to-[#6E1514] text-white z-50 md:rounded-r-2xl text-lg' : 'hidden'}>
                <div className='py-6 flex flex-col items-center gap-4'>
                    <a onClick={handleClick} href='#' className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={exit} alt='Teras Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Go Back</span>
                    </a>
                    <a onClick={() => handleNavigation('/')}
                        href='/' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={teras} alt='Teras Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Home</span>
                    </a>
                    <a onClick={() => handleNavigation('/category/Beef')}
                        href='/category/Beef'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={beef} alt='Beef Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Beef</span>
                    </a>
                    <a onClick={() => handleNavigation('/category/Chicken')}
                        href='/category/Chicken' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={chicken} alt='Chicken Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Chicken</span>
                    </a>
                    <a onClick={() => handleNavigation('/category/Seafood')} 
                        href='/category/Seafood' 
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={fish} alt='Fish Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Seafood</span>
                    </a>
                    <a onClick={() => handleNavigation('/category/Vegan')} 
                        href='/category/Vegan'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={salad} alt='Salad Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>Vegetables</span>
                    </a>
                    <a onClick={() => handleNavigation('/category/all')}
                        href='/category/all'
                        className='flex items-center p-2 hover:bg-[#FFB300] hover:text-black transition-all duration-200 w-3/4 rounded-2xl'>
                        <img src={all} alt='All Icon' className='w-10 h-10'/><span className='mx-5 border-b-2'>All</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
