import React from 'react';
import { FaStar } from "react-icons/fa";
import ReviewerCard from './reviewer-card/ReviewerCard';

const RatingAndReviews = () => {
    return (
        <section className='mt-15'>
            <div className='flex justify-between items-start gap-5 mb-5'>
                <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Rating & Reviews</h2>
                <div className='flex justify-center items-center gap-2 bg-teal-500 rounded-full px-4 py-1 text-yellow-50'>
                    <FaStar className='' />
                    <span className='font-bold'>4.9</span>
                    <span className='hidden sm:block text-xs'>(<span>128</span> reviews)</span>
                </div>
            </div>

            <div className='space-y-5'>
                {
                    Array.from({ length: 3 }).map((_, index) => (
                        <ReviewerCard key={index} />
                    ))
                }
            </div>
        </section>
    );
};

export default RatingAndReviews;