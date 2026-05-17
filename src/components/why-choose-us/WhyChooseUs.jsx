import React from 'react';
import ChooseUsCard from './choose-us-card/ChooseUsCard';

const WhyChooseUs = () => {
    return (
        <section className='max-w-7xl mx-auto my-15 sm:my-25 p-5 sm:p-8 md:p-15 lg:p-18 bg-teal-300 rounded-md'>
            <div className='sm:flex sm:justify-between sm:items-start sm:gap-4 md:gap-20'>
                <div className='flex-1'>
                    <h2 className='font-fredoka font-normal text-[28px] [@media(min-width:32rem)]:text-4xl text-teal-900 text-left'>Why Choose Us</h2>
                    <p className='font-medium text-[12px] [@media(min-width:32rem)]:text-base text-justify mt-5 mb-15 text-gray-600'>We redefine the property search experience with dedication and expertise, providing a seamless journey to your new home.</p>
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