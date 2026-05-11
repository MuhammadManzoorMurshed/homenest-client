import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.svg';
import useAuth from '../../hooks/useContext';
import { RiUserAddFill } from 'react-icons/ri';
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigateTo = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigateTo('/authentication/signin');
            })
            .catch(error => console.log("Error while logging out: ", error));
    }

    const links = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive, isPending }) => `hover:bg-teal-200 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to='/all-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >All Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/add-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >Add Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/my-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >My Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/my-ratings'
                className={({ isActive, isPending }) => `hover:bg-teal-200 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >My Ratings</NavLink>
        </li>
    </>

    return (
        <div className="max-w-360 mx-auto navbar px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost mx-1 px-3 transition duration-300 hover:bg-teal-500 hover:scale-95 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-3 font-fredoka font-semibold text-2xl pl-0 cursor-pointer transition-all duration-100 hover:scale-95 hover:text-teal-700'>
                    <img className='w-8 h-8 hidden sm:block' src={logo} alt="" />
                    <a className="">Hom<span className='text-teal-700'>eN</span>est</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex font-semibold">
                <ul className="menu gap-2 menu-horizontal">
                    {
                        links
                    }
                </ul>
            </div>
            {/* --------------- Button --------------- */}
            <div className="navbar-end space-x-3">
                {
                    !user && <>
                        <Link to={'/authentication/signin'} className='transition hover:scale-95 duration-300' ><CgLogIn className='w-6 h-6 sm:hidden text-teal-500'/></Link>
                        <Link to={'/authentication/signup'} className='transition hover:scale-95 duration-300' ><RiUserAddFill className='w-6 h-6 sm:hidden text-teal-700'/></Link>

                        <NavLink to={'/authentication/signin'} className="btn hidden sm:flex bg-teal-300 text-black transition duration-300 hover:bg-teal-500 hover:text-white hover:scale-105 ">Signin</NavLink>
                        <NavLink to={'/authentication/signup'} className="btn hidden sm:flex bg-teal-700 text-white transition duration-300 hover:bg-teal-500 hover:scale-105">Signup</NavLink>
                    </>
                }
            </div>

            {/* --------------- Profile --------------- */}
            {
                user && <>
                    <div className="mr-4">
                        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full transition duration-300 hover:outline-2 hover:outline-teal-500 hover:scale-105">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-68 sm:w-75 px-2 py-6 shadow">
                                <li className=''>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge bg-teal-300">New</span>
                                    </a>
                                </li>
                                <div className='p-2'>
                                    <li className='text-teal-700 text-base font-bold'>Muhammad Manzoor Murshed</li>
                                    <li className='mt-2 text-teal-500 text-sm'>mmmftcctgbdpuc@gmail.com</li>
                                </div>
                                <button onClick={handleLogout} className='btn mt-2 transition duration-300 hover:bg-teal-500 hover:text-white hover:scale-x-95 hover:scale-y-110'>Logout</button>
                            </ul>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;