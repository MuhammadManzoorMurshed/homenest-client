import React from 'react';
import { MdOutlineStarRate } from 'react-icons/md';

const ShareExperience = () => {
    return (
        <section className='mt-15'>
            <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Share Your Experience</h2>
            <p className='mt-5 text-xs text-gray-700 font-semibold mb-1'>Your Rating</p>
            <div className='flex gap-1 text-teal-700'>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
            </div>
            <p className='mt-5 text-xs text-gray-700 font-semibold mb-1'>Your Review</p>
            <textarea className='w-full p-3 border rounded-lg placeholder:text-xs bg-white border-gray-200' rows="4" placeholder='Tell us what you think about this property......'></textarea>
            <button className='mt-3 bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-300'>Submit Review</button>
        </section>
    );
};

export default ShareExperience;