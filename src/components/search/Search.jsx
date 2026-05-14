import React from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <section className='my-10 bg-white p-5 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
            <div className='relative sm:flex-1 lg:flex-2'>
                <input type="text" placeholder='City, Zip or Neighborhood...' className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-xs placeholder:pl-5' />

                <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs' />
            </div>

            <div className='sm:flex-2 md:flex-1 flex flex-col [@media(min-width:28rem)]:flex-row [@media(min-width:28rem)]:justify-between [@media(min-width:28rem)]:items-center gap-4 [@media(min-width:28rem)]:gap-2'>
                <div className='flex-1 [@media(min-width:28rem)]:flex-2 relative'>
                    <select name="sort" id="sort" className='w-full bg-teal-100 flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none'>
                        <option value="newest">Newest First</option>
                        <option value="price-asc">Price/Rent: Low to High</option>
                        <option value="price-desc">Price/Rent: High to Low</option>
                    </select>

                    <span className='absolute right-3 top-1/2  -translate-y-1/2 pointer-events-none'><FaChevronDown /></span>
                </div>

                <button className='flex-1 btn bg-teal-500 text-white hover:bg-teal-600 transition duration-300 hover:scale-y-105 py-2 px-4'>Search</button>
            </div>
        </section>
    );
};

export default Search;