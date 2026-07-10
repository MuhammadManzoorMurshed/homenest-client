import React from 'react';
import ChooseUsCard from './choose-us-card/ChooseUsCard';
import { motion } from 'motion/react';
import { fadeUp } from '../../animations/fade';
import { transitions } from '../../animations/shared';

const WhyChooseUs = () => {
    const MotionHeading = motion.h2;
    const MotionParagraph = motion.p;

    return (
        <section className='max-w-7xl mx-auto my-15 sm:my-25 p-5 sm:p-8 md:p-15 lg:p-18 bg-teal-300 dark:bg-gray-800 rounded-md'>
            <div className='sm:flex sm:justify-between sm:items-start sm:gap-4 md:gap-20'>
                <div className='flex-1'>
                    <MotionHeading
                        variants={fadeUp()}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        className='font-fredoka font-normal text-[28px] [@media(min-width:32rem)]:text-4xl text-teal-900 dark:text-teal-300 text-left'
                    >
                        Why Choose Us
                    </MotionHeading>
                    <MotionParagraph
                        variants={fadeUp(transitions.slow)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 1
                        }}
                        className='font-medium text-[12px] [@media(min-width:32rem)]:text-base text-justify mt-5 mb-15 text-gray-600 dark:text-gray-300'
                    >
                        We redefine the property search experience with dedication and expertise, providing a seamless journey to your new home.
                    </MotionParagraph>
                    <img className='mt-5 rounded-md object-cover w-full max-h-80' src="/4.png" alt="" />
                </div>
                <div className='flex-1'>
                    <ChooseUsCard />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;