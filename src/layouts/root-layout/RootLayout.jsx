import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

const RootLayout = () => {
    return (
        <div className=''>
            <header className='py-5 bg-teal-100 shadow-xs rounded-bl-2xl rounded-br-2xl'>
                <Navbar />
            </header>

            <main className='px-4'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;