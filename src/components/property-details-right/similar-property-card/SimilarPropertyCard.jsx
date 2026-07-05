import React from 'react';

const SimilarPropertyCard = () => {
    return (
        <div className='group flex gap-4 justify-start items-start bg-teal-50 dark:bg-gray-900 p-4 rounded-lg'>
            <div className=' w-24 h-20 overflow-hidden rounded-xl'>
                <img className='w-full h-full object-cover transition duration-300 group-hover:scale-105' src="/3.png" alt="" />
            </div>
            <div>
                <h3 className='font-bold text-base dark:text-gray-100'>Coastal Zen Retreat</h3>
                <p className='text-gray-500 dark:text-gray-400 text-base'>$<span>3,850,000</span></p>
            </div>
        </div>
    );
};

export default SimilarPropertyCard;