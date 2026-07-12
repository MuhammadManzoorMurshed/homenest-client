import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { durations } from '../../animations/shared';

const cardVariants = {
    // initial
    hidden: {
        opacity: 0,
        y: 20,
    },

    // animate
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.normal,
        }
    }
};

const PropertyCard = ({ property, orchestrated = false }) => {
    const navigateTo = useNavigate();
    const { _id, firstImage, propertyName, city, thana, listingPurpose, propertyType, price, name } = property || {};
    const MotionContainer = motion.div;
    const location = useLocation();
    const motionProps = location.pathname === '/' ? {
        variants: cardVariants,
    } : {
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            // once: true,
            amount: 0.2,
        },
    };

    return (
        <MotionContainer
            {...motionProps}
            whileHover={{
                scale: 1.02,
                y: -6,
                transition: {
                    duration: 0.35,
                }
            }}
            transition={{
                duration: 0.2,
            }}
            className="card bg-teal-50 dark:bg-gray-900 max-w-96 xl:w-96 shadow-sm dark:shadow-gray-900/50 hover:shadow-lg transition-shadow duration-300 rounded-lg relative group">
            <figure className='h-48 overflow-hidden'>
                <img className='cover group-hover:scale-105 transition-transform duration-300'
                    src={firstImage}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col gap-2 py-6 px-2">
                <p className='absolute top-4 right-4 bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-100 font-semibold px-3 py-1 rounded-full'>{listingPurpose == 'rent' ? 'For Rent' : 'For Sale'}</p>

                <h2 className="card-title text-teal-600 dark:text-teal-400">{propertyName}</h2>

                <p className='text-gray-500 dark:text-gray-400 text-xs'><FiMapPin className='inline' /><span> {city}</span>, <span>{thana}</span></p>

                <div className='flex justify-between items-center gap-2'>
                    <p className='text-xs bg-teal-200 dark:bg-teal-800 text-teal-900 dark:text-teal-100 px-3 py-1 rounded-full'>{propertyType == 'apartment' ? 'Apartment' : propertyType == 'house' ? 'House' : propertyType == 'flat' ? 'Flat' : 'N/A'}</p>
                    <p className='text-xs text-gray-500 dark:text-gray-400 outline outline-teal-200 dark:outline-teal-700 px-2 py-1 rounded-md'>Posted by: <span>{name}</span></p>
                </div>

                <div className="card-actions justify-between gap-2 items-center mt-4">
                    <p className="text-base text-teal-600 dark:text-teal-400 outline outline-teal-600 dark:outline-teal-500 rounded-xl px-3 py-1.5">$ <span>{price}</span></p>
                    <button onClick={() => navigateTo(`/properties/${_id}`)} className="btn flex-1 font-fredoka text-base bg-teal-500 text-white transition duration-300 hover:scale-x-95">See Details</button>
                </div>
            </div>
        </MotionContainer>
    );
};

export default PropertyCard;