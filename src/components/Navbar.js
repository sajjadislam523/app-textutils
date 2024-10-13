import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    // State to track whether mobile menu is open
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className='flex items-center justify-between py-4 md:px-11'>
                <div className='px-4 md:px-0'>
                    <p className='text-2xl font-bold'>{props.title}</p>
                </div>

                {/* Search bar */}
                <div className='relative flex items-center'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='w-full px-4 py-2 transition duration-300 ease-in-out border border-gray-300 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-400'
                    />
                    <button className='absolute z-10 p-2 text-white transition duration-300 ease-in-out bg-blue-500 border-none rounded-full shadow-md hover:bg-blue-600 hover:text-white right-2 focus:outline-none'>
                        <img width="15" height="15" src="https://img.icons8.com/material-sharp/24/chevron-right.png" alt="chevron-right" />
                    </button>
                </div>

                {/* Desktop menu */}
                <div className='hidden md:flex'>
                    <ul className='flex items-center justify-center gap-4'>
                        <li><a href="/">{props.homeText}</a></li>
                        <li><a href="/">{props.aboutText}</a></li>
                        <li><a href="/">{props.contactText}</a></li>
                    </ul>
                </div>

                {/* Hamburger menu button (Visible on smaller screens) */}
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className='relative z-50 block px-4 md:hidden focus:outline-none'>
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span className={`line top ${isMobileMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
                        <span className={`line middle ${isMobileMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
                        <span className={`line bottom ${isMobileMenuOpen ? 'bg-white' : 'bg-black'}`}></span>
                    </div>
                </button>
            </nav>

            {/* Mobile menu is visible when hamburger is clicked */}
            <div
                className={`mobile-menu fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className='flex flex-col items-center justify-center w-11/12 h-screen mx-auto space-y-6 text-lg text-white'>
                    <a href="/" className='w-full py-4 text-center transition duration-300 ease-in-out border-b border-gray-600 hover:bg-gray-800'>
                        {props.homeText}
                    </a>
                    <a href="About" className='w-full py-4 text-center transition duration-300 ease-in-out border-b border-gray-600 hover:bg-gray-800'>
                        {props.aboutText}
                    </a>
                    <a href="/" className='w-full py-4 text-center transition duration-300 ease-in-out hover:bg-gray-800'>
                        {props.contactText}
                    </a>
                </div>
            </div>
        </>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    contactText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Brand Title',
    homeText: 'Home',
    aboutText: 'About',
    contactText: 'Contact'
}