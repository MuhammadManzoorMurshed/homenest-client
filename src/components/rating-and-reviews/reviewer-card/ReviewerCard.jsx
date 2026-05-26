import { format } from 'date-fns';
import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewerCard = ({ review  }) => {
    const { userPhoto, userName, createdAt, rating, comment,  } = review;
    const date = createdAt;
    const formattedDate = format(new Date(date), "dd MMM yyyy");

    return (
        <div className='p-6 bg-white rounded-lg shadow-xs'>
            <div className='[@media(min-width:25rem)]:flex [@media(min-width:25rem)]:justify-between [@media(min-width:25rem)]:items-start'>
                <div className='flex justify-start items-center gap-4 mb-3'>
                    <div className='outline-1 outline-teal-600 bg-teal-300 rounded-full overflow-hidden'>
                        {/* <h3 className='font-bold text-sm'>SM</h3> */}
                        <img className='w-10 h-10 rounded-full' src={userPhoto} alt="" />
                    </div>
                    <div>
                        <h4 className='font-semibold text-base'>{userName}</h4>
                        <p className='text-sm text-gray-600'>{formattedDate}</p>
                    </div>
                </div>
                <div>
                    <div className='text-teal-700 flex gap-1 mb-3'>
                        {
                            [1, 2, 3, 4, 5].map((star) => {
                                return <span
                                key={star}
                                className={`${star <= rating ? 'text-teal-600' : 'text-gray-300'}`}
                                >
                                    <FaStar />
                                </span>
                            })
                        }
                    </div>
                </div>
            </div>
            <p className='text-gray-600 text-sm'>{comment}</p>
        </div>
    );
};

export default ReviewerCard;