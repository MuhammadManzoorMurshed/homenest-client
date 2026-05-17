import React from 'react';

const ReadyToSell = () => {
    return (
        <section className='max-w-7xl mx-auto my-15 sm:my-25 sm:pl-8 md:pl-15 lg:pl-18 bg-teal-500 rounded-md'>
            <div className='sm:flex sm:justify-between sm:items-center sm:gap-4 md:gap-20 group'>
                <div className='group-hover:scale-105 transition-transform duration-200 flex-1 px-3 pt-5 sm:px-0 sm:pt-0'>
                    <h2 className='font-fredoka font-semibold text-[28px] [@media(min-width:32rem)]:text-4xl text-teal-200 text-left'>Ready to Sell Your Property?</h2>
                    <p className='font-medium text-[12px] [@media(min-width:32rem)]:text-base text-justify mt-5 mb-10 sm:mb-15 text-teal-100'>We redefine the property search experience with dedication and expertise, providing a seamless journey to your new home.</p>

                    <div className='flex flex-col sm:flex-row gap-5 '>
                        <button className='btn bg-teal-400 border-0 text-teal-800 transition duration-300 hover:scale-y-105 hover:bg-teal-300 sm:py-6'>List Your Property</button>
                        <button className='btn btn-outline text-teal-200 transition-all duration-300 hover:bg-teal-700 hover:scale-y-105 sm:py-6'>Free Valuation</button>
                    </div>
                    
                </div>
                <div className='flex-1 mt-5 sm:mt-0'>
                    <img className='transition-transform duration-200 group-hover:scale-95 rounded-md object-cover w-full max-h-125' src="/E.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default ReadyToSell;