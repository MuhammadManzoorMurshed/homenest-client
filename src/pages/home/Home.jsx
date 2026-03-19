import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>HomeNest | Home</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <h1>I am Home Page</h1>
            </div>
        </>
    );
};

export default Home;