import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.svg';
import useAuth from '../../hooks/useContext';
import { RiUserAddFill } from 'react-icons/ri';
import { CgLogIn } from "react-icons/cg";
import Loading from '../loading/Loading';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import { motion } from 'motion/react';
import { interactions } from '../../animations/interactions';
// import { transitions } from '../../animations/shared';

const Navbar = () => {
    const { user, logOut, loading } = useAuth();
    const navigateTo = useNavigate();
    const MotionButton = motion.button;

    if (loading) {
        return <Loading />
    }

    // const {displayName, email, photoURL} = user;
    // console.log("User: in Nav: ", photoURL);

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
                className={({ isActive, isPending }) => `hover:bg-teal-200 dark:hover:bg-gray-700 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to='/all-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 dark:hover:bg-gray-700 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >All Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/add-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 dark:hover:bg-gray-700 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >Add Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/my-properties'
                className={({ isActive, isPending }) => `hover:bg-teal-200 dark:hover:bg-gray-700 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >My Properties</NavLink>
        </li>
        <li>
            <NavLink
                to='/my-ratings'
                className={({ isActive, isPending }) => `hover:bg-teal-200 dark:hover:bg-gray-700 transition-transform duration-100 hover:scale-105 ${isPending ? "pending" : isActive ? "active" : ""}`}
            >My Ratings</NavLink>
        </li>
    </>

    return (
        <div className="max-w-360 mx-auto navbar px-0 lg:pl-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost mx-1 px-3 transition duration-300 hover:bg-teal-500 dark:hover:bg-gray-700 hover:scale-95 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-md dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow dark:shadow-gray-900/50 space-y-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div onClick={() => navigateTo('/')} className='flex items-center gap-3 font-fredoka font-semibold text-2xl pl-0 cursor-pointer transition-all duration-100 hover:scale-95 hover:text-teal-700 dark:hover:text-teal-300'>
                    <img className='w-8 h-8 hidden sm:block' src={logo} alt="" />
                    <a className="">Hom<span className='text-teal-700 dark:text-teal-400'>eN</span>est</a>
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
            <div className="navbar-end space-x-3 sm:pr-4">
                <ThemeToggle />

                {
                    !user && <>
                        <Link to={'/authentication/signin'} className='transition hover:scale-95 duration-300' ><CgLogIn className='w-6 h-6 sm:hidden text-teal-500 dark:text-teal-400' /></Link>
                        <Link to={'/authentication/signup'} className='transition hover:scale-95 duration-300' ><RiUserAddFill className='w-6 h-6 sm:hidden text-teal-700 dark:text-teal-400' /></Link>

                        <motion.NavLink
                            whileHover={interactions.buttonHover}
                            whileTap={interactions.buttonTap}
                            // transition={transitions.normal}
                            to={'/authentication/signin'} className="btn hidden sm:flex bg-teal-300 dark:bg-teal-700 text-black dark:text-white transition duration-150 hover:bg-teal-500 hover:text-white ">Signin</motion.NavLink>
                        <motion.NavLink
                            whileHover={interactions.buttonHover}
                            whileTap={interactions.buttonTap}
                            to={'/authentication/signup'} className="btn hidden sm:flex bg-teal-700 text-white transition duration-150 hover:bg-teal-500">Signup</motion.NavLink>
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
                                        referrerPolicy="no-referrer"
                                        src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/049/391/629/non_2x/young-man-avatar-character-due-avatar-man-icon-cartoon-illustration-free-vector.jpg"} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-68 sm:w-75 px-2 py-6 shadow dark:shadow-gray-900/50">
                                <li className=''>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge bg-teal-300 dark:bg-teal-700 dark:text-white">New</span>
                                    </a>
                                </li>
                                <div className='p-2'>
                                    <li className='text-teal-700 dark:text-teal-300 text-base font-bold'>{user?.displayName}</li>
                                    <li className='mt-2 text-teal-500 dark:text-teal-400 text-sm'>{user?.email}</li>
                                </div>
                                <MotionButton
                                    whileHover={interactions.buttonHover}
                                    whileTap={interactions.buttonTap}
                                    // transition={transitions.normal}
                                    onClick={handleLogout} className='btn mt-2 transition duration-300 hover:bg-teal-500 hover:text-white'>Logout</MotionButton>
                            </ul>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;