import React from 'react';
import { Helmet } from 'react-helmet-async';
import notFoundImage from './../../assets/404.jpg';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigateTo = useNavigate();
    
    return (
        <>
            <Helmet>
                <title>HomeNest | Page Not Found</title>
            </Helmet>

            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <img className='w-96 h-96 object-cover rounded-2xl' src={notFoundImage} alt="Page Not Found" />
                    <button onClick={() => navigateTo('/')} className='bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:scale-105 hover:bg-blue-700 cursor-pointer'>
                        Go Back Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;