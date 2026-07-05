import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Bath, Bed, Map, RulerDimensionLine } from 'lucide-react';
import SimilarPropertyCard from './similar-property-card/SimilarPropertyCard';
import { format } from 'date-fns';

const PropertyDetailsRight = ({ property }) => {
    const { propertyName, location, price, createdAt } = property || {};
    const date = createdAt;
    const formattedDate = format(new Date(date), "dd MMM yyyy");

    return (
        <div className='flex-1'>
            <div className='mt-15 md:mt-0 shadow-sm dark:shadow-gray-900/50 p-5 rounded-lg bg-teal-50 dark:bg-gray-900'>
                <h1 className='text-teal-600 dark:text-teal-400 font-fredoka font-semibold text-3xl'>{propertyName}</h1>
                <p className='dark:text-gray-300'><FiMapPin className='inline text-teal-700 dark:text-teal-400' /> <span>{location.city}</span>, <span>{location.thana}</span>, <span>{location.area}</span></p>
                <h2 className='my-5 text-3xl font-semibold dark:text-gray-100'>$<span>{price.toLocaleString()}</span></h2>

                <hr className='text-gray-300 dark:border-gray-700 border' />

                <div className='mt-5 flex justify-between items-center'>
                    <div className='flex flex-col gap-1 items-center '>
                        <Bed className='text-teal-700 dark:text-teal-400' />
                        <p className='text-sm text-gray-700 dark:text-gray-300'><span>4</span> Beds</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <Bath className='text-teal-700 dark:text-teal-400' />
                        <p className='text-sm text-gray-700 dark:text-gray-300'><span>4</span> Baths</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <RulerDimensionLine className='text-teal-700 dark:text-teal-400' />
                        <p className='text-sm text-gray-700 dark:text-gray-300'><span>2,500</span> sqft</p>
                    </div>
                </div>
                <button className='w-full mt-5 bg-teal-600 transition duration-300 hover:bg-teal-900 hover:scale-y-105 text-white font-bold py-2 px-4 rounded'>
                    Contact Agent
                </button> <br />
                <button className='w-full mt-5 bg-teal-300 dark:bg-teal-700 transition duration-300 hover:bg-teal-400 dark:hover:bg-teal-600 hover:scale-y-105 text-teal-600 dark:text-teal-100 hover:text-teal-900 dark:hover:text-white font-bold py-2 px-4 rounded'>
                    Schedule Tour
                </button>
                <p className='mt-5 text-sm text-gray-600 dark:text-gray-400 text-center'>Listed on: <span>{formattedDate}</span></p>
            </div>

            <div className='p-6 mt-15 bg-teal-100 dark:bg-gray-800 rounded-lg'>
                <p className='text-base text-gray-600 dark:text-gray-400'>NEIGHBORHOOD LOCATION</p>
                <div className='h-80 sm:h-100 md:h-90 flex justify-center items-center mt-2 rounded-lg overflow-hidden bg-teal-200 dark:bg-gray-700'>
                    <Map className='text-teal-300 dark:text-teal-500 w-12 h-12' />
                </div>
            </div>

            <div className='p-6 mt-15 bg-teal-100 dark:bg-gray-800 rounded-lg'>
                <h2 className='text-teal-700 dark:text-teal-300 font-fredoka font-normal text-2xl'>Similar Properties</h2>
                <p className='my-4 text-sm text-gray-500 dark:text-gray-400'>Check out these similar properties you might like!</p>

                <div className='space-y-5'>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <SimilarPropertyCard key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsRight;