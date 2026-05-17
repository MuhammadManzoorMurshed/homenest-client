import React from 'react';

const HeroCarousel = () => {
    return (
        <section className='relative'>
            <img className='w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover' src="/carousel.png" alt="" />

            <div className='absolute top-1/2 -translate-y-1/2 sm:left-10 sm:w-3/5 md:left-20 md:w-1/2 lg:w-3/7 [@media(min-width:28rem)]:px-10 [@media(min-width:35rem)]:px-15 [@media(min-width:40rem)]:px-0'>
                <h1 className='font-semibold sm:font-bold font-fredoka text-2xl [@media(min-width:28rem)]:text-3xl [@media(min-width:40rem)]:text-5xl [@media(min-width:64rem)]:text-7xl text-white text-center sm:text-left'>Find Your<span><br /></span>Dream House</h1>
                <p className='font-normal sm:font-semibold text-sm [@media(min-width:35rem)]:text-base [@media(min-width:64rem)]:text-xl md:text-7xl text-teal-100 my-5 sm:my-10 text-center sm:text-left'>Discover exclusive listings in the most sought-after neighborhoods. Your perfect sanctuary is just a search away.</p>
                
                <div className='text-center sm:text-left'>
                    <button className='btn bg-teal-400 border-0 w-50 sm:w-60 h-12 sm:h-15 text-teal-900 text-base transition duration-300 hover:bg-teal-500 hover:text-teal-100 hover:scale-105'>Browse Properties</button>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;