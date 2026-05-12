import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ image }) => {
    const navigateTo = useNavigate();

    return (
        <div className="card bg-teal-50 max-w-96 xl:w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg relative group">
            <figure className='h-48 overflow-hidden'>
                <img className='cover group-hover:scale-105 transition-transform duration-300'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col gap-2 py-6 px-2">
                <p className='absolute top-4 right-4 bg-teal-200 text-teal-800 font-semibold px-3 py-1 rounded-full'>For Sale</p>

                <h2 className="card-title text-teal-600">Skyline Vista Residence</h2>

                <p className='text-gray-500 text-xs'><FiMapPin className='inline' /> Beverly Hills, CA 90210</p>

                <div className='flex justify-between items-center'>
                    <p className='text-xs bg-teal-200 text-teal-900 px-3 py-1 rounded-full'>Apartment</p>
                    <p className='text-xs text-gray-500 outline outline-teal-200  px-2 py-1 rounded-md'>Posted by: John Doe</p>
                </div>

                {/* <div className='flex justify-between gap-4 items-center'>
                    <button className="bg-teal-50 font-fredoka text-xl cursor-pointer text-teal-600 transition duration-300 hover:underline hover:scale-105">View Details</button>
                </div> */}
                <div className="card-actions justify-between gap-2 items-center mt-4">
                    <p className="text-base text-teal-600 outline outline-teal-600 rounded-xl px-3 py-1.5">$<span>500,000</span></p>
                    <button onClick={() => navigateTo('/properties/1')} className="btn flex-1 font-fredoka text-base bg-teal-500 text-white transition duration-300 hover:scale-x-95">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;