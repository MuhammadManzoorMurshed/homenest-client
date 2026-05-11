import React from 'react';
import MyProperty from '../../components/my-property.jsx/MyProperty';

const MyProperties = () => {
    return (
        <div className='max-w-7xl mx-auto my-15'>
            <div className='text-right'>
                <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center'>My Properties</h1>
                <p className='font-medium text-md text-center mt-4'>Manage your active listings, monitor inquiries, and keep your property details<span className='hidden sm:inline'><br /></span>up to date for potential buyers and renters.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-15 justify-items-center'>
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <MyProperty key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyProperties;