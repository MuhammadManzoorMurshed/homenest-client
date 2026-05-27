import { format } from 'date-fns';
import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingCard = ({ myRating }) => {
    const {images, propertyName, rating, comment, userPhoto, userName, createdAt} = myRating;
    const date = createdAt;
    const formattedDate = format(new Date(date), "dd MMM yyyy"); 
    
    return (
        <div className='group h-125 sm:h-60 sm:flex sm:justify-between sm:items-center gap-5 bg-white rounded-lg overflow-hidden shadow-xs sm:pr-5'>
            <img className='group-hover:scale-105 transition-transform duration-300 flex-1 h-1/2 w-full object-cover sm:size-full block sm:hidden' src={images[0]} alt="" />
            <div className='flex-2 px-3 py-5'>
                
                <div className='flex justify-start items-end gap-6'>
                    <img className='group-hover:scale-105 transition-transform duration-300  h-24 w-32 object-cover rounded-lg hidden sm:block' src={images[0]} alt="" />
                    <div>
                        <h3 className='font-normal text-lg [@media(min-width:25rem)]:text-xl text-teal-600'>{propertyName}</h3>
                        <div className='flex gap-1 mt-1'>
                            {
                                [1, 2, 3, 4, 5].map(star => {
                                    return <span>
                                        {
                                            star <= rating ? <FaStar className='text-teal-500' /> : <FaRegStar className='text-teal-500' />
                                        }
                                    </span>
                                })
                            }
                            
                            {/* <FaStarHalfAlt className='text-teal-500' /> */}
                            
                        </div>
                    </div>
                </div>
                <p className='mt-5 text-sm text-gray-600 text-justify'>{comment.slice(0, 150)}...</p>
                <hr className='my-5 text-gray-300' />

                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-4'>
                        <div className='bg-teal-300 rounded-full'>
                            {/* <p className='font-semibold text-xs text-teal-600'>JD</p> */}
                            <img className='size-6 rounded-full' src={userPhoto} alt="User Photo" />
                        </div>
                        <p className='font-semibold text-sm'>{userName} (You)</p>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500 hidden [@media(min-width:25rem)]:block'>{formattedDate}</p>
                    </div>
                    <button className='transform-border hover:border duration-200 hover:px-3 hover:py-1 rounded-md text-teal-600 hover:text-teal-700 cursor-pointer'>Edit Review</button>
                </div>
            </div>
        </div>
    );
};

export default RatingCard;