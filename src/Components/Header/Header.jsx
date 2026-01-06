import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';


const Header = () => {
    
    return (
        <div className=' work-sans-font'>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/listed-books"  className=''>Listed Books</NavLink>
                        <NavLink to="/pages-to-read"   className=''>Pages to Read</NavLink>
                    </ul>
                    </div>
                    <a className="text-xl md:text-[28px] font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} >Home</NavLink>
                    <NavLink to="/listed-books" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Listed Books</NavLink>
                    <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="rounded-lg bg-[#23BE0A] py-2 px-3 md:py-3 md:px-6 text-white">Sign in</button>
                    <button className="rounded-lg bg-[#59C6D2] py-2 px-3 md:py-3 md:px-6 text-white">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;