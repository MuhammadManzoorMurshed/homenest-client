import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { MdSupportAgent, MdVerifiedUser } from 'react-icons/md';
import { AiOutlineTransaction } from "react-icons/ai";


const ChooseUsCard = () => {
    return (
        <div className='space-y-5 mt-10 sm:mt-0'>
            <div className='bg-teal-200 p-2 md:p-5 rounded-md'>
                <MdSupportAgent className='text-teal-700 size-14 bg-teal-100 p-3 rounded-xl' />
                <h3 className='font-bold text-teal-900 my-2'>Expert Agents</h3>
                <p className='text-sm text-gray-700'>Highly trained professionals with deep local market knowledge at your service.</p>
            </div>
            
            <div className='bg-teal-200 p-2 md:p-5 rounded-md'>
                <FaRegListAlt className='text-teal-700 size-14 bg-teal-100 p-3 rounded-xl' />
                <h3 className='font-bold text-teal-900 my-2'>Wide Selection</h3>
                <p className='text-sm text-gray-700'>Thousands of curated listings to match every lifestyle and unique budget.</p>
            </div>

            <div className='bg-teal-200 p-2 md:p-5 rounded-md'>
                <MdVerifiedUser className='text-teal-700 size-14 bg-teal-100 p-3 rounded-xl' />
                <h3 className='font-bold text-teal-900 my-2'>Trusted Reviews</h3>
                <p className='text-sm text-gray-700'>Verified feedback from homeowners and renters you can absolutely trust.</p>
            </div>

            <div className='bg-teal-200 p-2 md:p-5 rounded-md'>
                <AiOutlineTransaction className='text-teal-700 size-14 bg-teal-100 p-3 rounded-xl' />
                <h3 className='font-bold text-teal-900 my-2'>Fast Closings</h3>
                <p className='text-sm text-gray-700'>Streamlined digital process for quicker transactions and less stress.</p>
            </div>
        </div>
    );
};

export default ChooseUsCard;