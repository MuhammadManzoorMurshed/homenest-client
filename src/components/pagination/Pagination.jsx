import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({borderRadius, isHidden = 'hidden'}) => {
    return (
        <div className='flex justify-center items-center gap-4 mt-10'>
            <button className={`btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} size-8 p-3`}><FaChevronLeft /></button>

            <button className={`btn btn-outline bg-teal-500 text-white transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} size-8 p-3`}>1</button>

            <button className={`btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} size-8 p-3`}>2</button>

            <button className={`btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} size-8 p-3`}>3</button>

            <p className={`${isHidden}`}>...</p>
            <button className={`btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} ${isHidden} size-8 p-3`}>10</button>

            <button className={`btn btn-outline transition-all duration-300 hover:bg-teal-400 hover:scale-105 hover:text-white border-gray-300 ${borderRadius} size-8 p-3`}><FaChevronRight /></button>
        </div>
    );
};

export default Pagination;