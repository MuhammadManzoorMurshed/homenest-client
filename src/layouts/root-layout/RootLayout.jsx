import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import HeroCarousel from '../../components/hero-carousel/HeroCarousel';

const RootLayout = () => {
    return (
        <div className=''>
            <header >
                <div className='py-5 bg-teal-100 dark:bg-gray-800 shadow-xs dark:shadow-gray-900/50 rounded-bl-2xl rounded-br-2xl'>
                    <Navbar />
                </div>
            </header>

            <main className='px-4 md:px-8'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;