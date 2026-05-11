import React from 'react';
import { FiMapPin } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyProperty = () => {
    return (
        <div className="card bg-teal-50 max-w-96 lg:w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg relative group">
            <figure className=''>
                <img className='group-hover:scale-105 transition-transform duration-300'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body px-2">
                <p className='absolute top-4 right-4 bg-teal-200 text-teal-800 font-semibold px-3 py-1 rounded-full'>For Sale</p>
                <h2 className="card-title ">Skyline Vista Residence</h2>
                <p className='text-gray-500'><FiMapPin className='inline'/> Beverly Hills, CA 90210</p>

                <div className='flex justify-between gap-4 items-center'>
                    <p className="text-xl">$<span>500,000</span></p>
                    <button className="bg-teal-50 font-fredoka text-xl cursor-pointer text-teal-600 transition duration-300 hover:underline hover:scale-105">View Details</button>
                </div>
                <div className="card-actions justify-between gap-2 items-center mt-4">
                    <button className="btn text-red-600 font-fredoka text-base bg-teal-50 hover:bg-red-200 "><RiDeleteBin6Line /></button>
                    <button className="btn flex-1 font-fredoka text-base bg-teal-500 text-white transition duration-300 hover:scale-x-95">Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyProperty;