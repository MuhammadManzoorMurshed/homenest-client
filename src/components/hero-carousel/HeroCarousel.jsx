import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { interactions } from '../../animations/interactions';
// import { transitions } from '../../animations/shared';

const HeroCarousel = () => {
    const navigateTo = useNavigate();
    const MotionContainer = motion.div;
    const banners = [
        {
            id: 1,
            image: 'carousel.png',
            title: ['Find', 'Your', 'Dream', 'House'],
            description: "Discover exclusive listings in the most sought-after neighborhoods. Your perfect sanctuary is just a search away.",
        },
        {
            id: 2,
            image: '2.png',
            title: ['Smart', 'Invest,', 'Better', 'Living'],
            description: "Explore premium commercial spaces and residential properties at competitive prices. Make the investment that truly pays off.",
        },
        {
            id: 3,
            image: '8.png',
            title: ['Your', 'New', 'Chapter', 'Awaits'],
            description: "Whether renting or buying, we connect you with the right property at the right place. Start your journey to a better home today.",
        },
    ]

    console.log(banners[0].image, banners[0].title[0], banners[0].description);

    return (
        <section className='relative z-0'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 7500,
                }}
                speed={2000}
                loop={true}
            >
                {
                    banners.map(banner => {
                        return (
                            <SwiperSlide key={banner.id} className='relative'>
                                <img className='w-full h-[60vh] sm:h-[70vh] md:h-[90vh] object-cover' src={banner.image} alt="" />

                                <div className='absolute inset-0 bg-red-950/30'></div>

                                <div className='absolute top-1/2 -translate-y-1/2 sm:left-10 sm:w-3/5 md:left-20 md:w-1/2 lg:w-3/7 [@media(min-width:28rem)]:px-10 [@media(min-width:35rem)]:px-15 [@media(min-width:40rem)]:px-0'>
                                    <h1 className='font-semibold sm:font-bold font-fredoka text-2xl [@media(min-width:28rem)]:text-3xl [@media(min-width:40rem)]:text-5xl [@media(min-width:64rem)]:text-7xl text-white text-center sm:text-left'><span className='text-[#02c8a7]'>{banner.title[0]}</span> {banner.title[1]}<span><br /></span>{banner.title[2]} <span className='text-[#02c8a7]'>{banner.title[3]}</span></h1>
                                    <p className='font-normal sm:font-semibold text-sm [@media(min-width:35rem)]:text-base [@media(min-width:64rem)]:text-xl md:text-7xl text-teal-100 my-5 sm:my-10 text-center sm:text-left'>{banner.description}</p>

                                    <MotionContainer
                                        // whileHover={interactions.buttonHover}
                                        // whileTap={interactions.buttonTap}
                                        // transition={transitions.fast}
                                        className='text-center sm:text-left'>
                                        <motion.button
                                            whileHover={interactions.buttonHover}
                                            whileTap={interactions.buttonTap}
                                        onClick={() => navigateTo('/all-properties')} className='btn bg-teal-400 border-0 w-50 sm:w-60 h-12 sm:h-15 text-teal-900 text-base transition duration-150 hover:bg-teal-500 hover:text-teal-100'>Browse Properties</motion.button>
                                    </MotionContainer>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default HeroCarousel;