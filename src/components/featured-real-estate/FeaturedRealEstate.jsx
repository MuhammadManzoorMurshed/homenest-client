import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PropertyCard from '../../components/property-card/PropertyCard';

const FeaturedRealEstate = () => {
    const images = [
            { id: 1, image: '/1.png' },
            { id: 2, image: '/2.png' },
            { id: 3, image: '/3.png' },
            { id: 4, image: '/4.png' },
            { id: 5, image: '/5.png' },
            { id: 6, image: '/6.png' },
            { id: 7, image: '/7.png' },
            { id: 8, image: '/8.png' },
        ];

    return (
        <section className='max-w-7xl mx-auto my-15'>
            <div className='[@media(min-width:32rem)]:flex [@media(min-width:32rem)]:justify-between [@media(min-width:32rem)]:items-end'>
                <div className='text-right'>
                    <h2 className='font-fredoka font-semibold text-[28px] [@media(min-width:32rem)]:text-3xl text-teal-900 text-left'>Featured Real Estate</h2>
                    <p className='font-medium text-[12px] [@media(min-width:32rem)]:text-base text-left mt-4'>Handpicked premium listings just for you</p>
                </div>

                <div className='flex justify-end mt-5 [@media(min-width:32rem)]:mt-0'>
                    <button className='text-teal-600 flex items-center font-bold cursor-pointer transition duration-300 hover:text-teal-500 hover:scale-105'>View All &nbsp; <FaArrowRight className='inline' /> </button>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mt-15'>
                {
                    // Array.from({ length: 8 }).map((_, index) => (
                    //     <PropertyCard key={index} />
                    // ))

                    images.map(img => (
                        <PropertyCard key={img.id} image={img.image} />
                    ))
                }
            </div>

        </section>
    );
};

export default FeaturedRealEstate;