import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { MdOutlineStarRate } from 'react-icons/md';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import MySwal from '../../lib/swal';
import useAuth from './../../hooks/useContext';
import { useParams } from 'react-router-dom';

const ShareExperience = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [reviewData, setReviewData] = useState({
        email: user?.email || '',
        propertyId: id,
        rating: 0,
        comment: '',
    });
    const [hover, setHover] = useState(0);
    const queryClient = useQueryClient();
    const addReviewMutation = useMutation({
        mutationFn: async (newReview) => {
            return await axios.post('http://localhost:3000/api/v1/add-review', newReview).then(res => res.data);
        },

        onSuccess: (data) => {
            if (!data.success) {
                return MySwal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.message || 'Failed to add review. Please try again.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#0694a2',
                })
            }

            queryClient.invalidateQueries(['reviews']);
            setReviewData({
                rating: 0,
                comment: '',
            });

            MySwal.fire({
                icon: 'success',
                title: 'Review Added',
                text: 'Your review has been added successfully!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#38bdf8',
            })
        },

        onError: (error) => {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: error?.response?.data?.message || 'Failed to add review. Please try again.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0694a2',
            })
        }
    })

    const handleReviewSubmit = () => {
        const finalReviewData = {
            ...reviewData,
            email: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
        }

        if (!user?.email) {
            return MySwal.fire("Error", "You must be logged in to review", "error");
        }

        addReviewMutation.mutate(finalReviewData);
    }

    return (
        <section className='mt-15'>
            <h2 className='text-teal-900 dark:text-teal-300 font-fredoka font-normal text-2xl'>Share Your Experience</h2>
            <p className='mt-5 text-xs text-gray-700 dark:text-gray-400 font-semibold mb-1'>Select Star To Give Rating</p>
            <div className='flex gap-1 text-teal-700 dark:text-teal-400'>
                {/* <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/>
                <MdOutlineStarRate className='size-5'/> */}

                {
                    [1, 2, 3, 4, 5].map((star) => (
                        <button
                            type="button"
                            key={star}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setReviewData({
                                ...reviewData,
                                rating: star
                            })}
                            className={`transition duration-200 ${star <= (hover || reviewData.rating) ? 'text-teal-700 dark:text-teal-400' : 'text-gray-300 dark:text-gray-600'}`}
                        >
                            <MdOutlineStarRate className="size-5 pointer-events-none" />
                        </button>
                    ))
                }
            </div>
            <p className='mt-5 text-xs text-gray-700 dark:text-gray-400 font-semibold mb-1'>Your Review</p>
            <textarea
                value={reviewData.comment}
                onChange={(e) => setReviewData({
                    ...reviewData,
                    comment: e.target.value,
                })}
                className='w-full p-3 border rounded-lg placeholder:text-xs bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600'
                rows="4"
                placeholder='Tell us what you think about this property......'></textarea>
            <button onClick={handleReviewSubmit} className='mt-3 bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-300 cursor-pointer'>Submit Review</button>
        </section>
    );
};

export default ShareExperience;