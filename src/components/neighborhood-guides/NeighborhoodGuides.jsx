import React from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../../animations/fade';

const neighborhoodGuides = {
    image: ["a.png", "b.png", "c.png", "d.png"],
    title: ["Beverly Hills", "Malibu", "West Hollywood", "Pasadena"],
    description: ["The epitome of luxury and world-class prestige.", "Coastal serenity meets architectural marvels.", "Vibrant culture and dynamic urban sophistication.", "Historic charm with a focus on family and community."]
}

const NeighborhoodGuides = () => {
    const MotionHeading = motion.h2;

    return (
        <section className='max-w-7xl mx-auto my-15 sm:my-25'>
            <div className='[@media(min-width:32rem)]:flex [@media(min-width:32rem)]:justify-between [@media(min-width:32rem)]:items-end'>
                <div className='text-right'>
                    <MotionHeading
                        variants={fadeUp()}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        className='font-fredoka font-semibold text-[28px] [@media(min-width:32rem)]:text-3xl text-teal-900 dark:text-teal-300 text-left mb-10'
                    >
                        Neighborhood Guides
                    </MotionHeading>
                </div>
            </div>

            <div className='space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5 justify-between items-center'>
                {
                    Array(4).fill(0).map((_, index) => (
                        <div key={index} className='relative group rounded-lg overflow-hidden'>
                            <img className='transition-transform duration-300 ease-in-out group-hover:scale-105' src={neighborhoodGuides.image[index]} alt="" />
                            <div className='absolute bottom-3 left-3'>
                                <h3 className='text-white font-bold text-base'>{neighborhoodGuides.title[index]}</h3>
                                <p className='text-white fotn-normal text-xs'>{neighborhoodGuides.description[index]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default NeighborhoodGuides;