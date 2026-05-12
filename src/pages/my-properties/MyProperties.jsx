import React from 'react';
import MyProperty from '../../components/my-property.jsx/MyProperty';

const MyProperties = () => {
    const images = [
        {id: 1, image: '/1.png'},
        {id: 2, image: '/2.png'},
        {id: 3, image: '/3.png'},
        {id: 4, image: '/4.png'},
        {id: 5, image: '/5.png'},
        {id: 6, image: '/6.png'},
        {id: 7, image: '/7.png'},
        {id: 8, image: '/8.png'},
    ];

    return (
        <div className='max-w-7xl mx-auto my-15'>
            <div className='text-right'>
                <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center'>My Properties</h1>
                <p className='font-medium text-md text-center mt-4'>Manage your active listings, monitor inquiries, and keep your property details<span className='hidden sm:inline'><br /></span>up to date for potential buyers and renters.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-15 justify-items-center'>
                {
                    images.map(img => (
                        <MyProperty key={img.id} image={img.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyProperties;