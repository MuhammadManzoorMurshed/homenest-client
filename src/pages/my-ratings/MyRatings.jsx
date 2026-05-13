import React from 'react';
import RatingCard from '../../components/rating-card/RatingCard';
import { FaCaretLeft, FaCaretRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MyRatings = () => {
    return (
        <div className='max-w-7xl mx-auto my-15'>
            <div className='sm:flex sm:justify-between sm:items-center gap-6 mb-10'>
                <div>
                    <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-left'>My Ratings</h1>
                    <p className='font-medium text-md text-left mt-4'>Here are the ratings you have given to various properties.</p>
                </div>
                <div className='flex gap-10 mt-10 sm:mt-0 bg-teal-100 px-15 py-5 rounded-md justify-evenly items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold text-2xl text-teal-600'>12</p>
                        <p className='text-sm text-gray-600'>Reviews</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold text-2xl text-teal-600'>4.8</p>
                        <p className='text-sm text-gray-600'>Average Rating</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <RatingCard key={index} />
                    ))
                }
            </div>

            <div className='flex justify-center items-center gap-4 mt-10'>
                <button className='btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 rounded-full size-8 p-3'><FaChevronLeft /></button>

                <button className='btn btn-outline bg-teal-500 text-white transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 rounded-full size-8 p-3'>1</button>

                <button className='btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 rounded-full size-8 p-3'>2</button>

                <button className='btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 rounded-full size-8 p-3'>3</button>
                
                <button className='btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 rounded-full size-8 p-3'><FaChevronRight /></button>
            </div>
        </div>
    );
};

export default MyRatings;