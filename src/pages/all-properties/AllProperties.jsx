import React from 'react';
import PropertyCard from '../../components/property-card/PropertyCard';

const AllProperties = () => {
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
                <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center'>All Properties</h1>
                <p className='font-medium text-md text-center mt-4'>Explore our curated selection of premium residences, from modern<span className='hidden sm:inline'><br /></span>urban lofts to sprawling suburban estates. Find the perfect place to call home.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-15 justify-items-center'>
                {
                    // Array.from({ length: 8 }).map((_, index) => (
                    //     <PropertyCard key={index} />
                    // ))

                    images.map(img => (
                        <PropertyCard key={img.id} image={img.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllProperties;