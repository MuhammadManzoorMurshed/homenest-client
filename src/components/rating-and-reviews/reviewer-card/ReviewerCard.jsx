import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewerCard = () => {
    return (
        <div className='p-6 bg-white rounded-lg shadow-xs'>
            <div className='[@media(min-width:25rem)]:flex [@media(min-width:25rem)]:justify-between [@media(min-width:25rem)]:items-start'>
                <div className='flex justify-start items-center gap-4 mb-3'>
                    <div className='p-3 bg-teal-300 rounded-full'>
                        <h3 className='font-bold text-sm'>SM</h3>
                    </div>
                    <div>
                        <h4 className='font-semibold text-base'>Sarah Mitchell</h4>
                        <p className='text-sm text-gray-600'>October 12, 2024</p>
                    </div>
                </div>
                <div>
                    <div className='text-teal-700 flex gap-1 mb-3'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <p className='text-gray-600 text-sm'>The property tour was amazing. The photos don't even do justice to the views. Julian was incredibly helpful and answered all our technical questions about the smart home integration.</p>
        </div>
    );
};

export default ReviewerCard;