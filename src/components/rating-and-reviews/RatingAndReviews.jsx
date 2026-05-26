import React from 'react';
import { FaStar } from "react-icons/fa";
import ReviewerCard from './reviewer-card/ReviewerCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MySwal from '../../lib/swal';
import Loading from '../loading/Loading';

const RatingAndReviews = () => {
    const { id } = useParams();
    const { data: reviews, isLoading, isError, error } = useQuery({
        queryKey: ['reviews', id],
        queryFn: async () => {
            return await axios.get(`http://localhost:3000/api/v1/get-reviews/${id}`).then(res => res.data);
        }
    })

    if(isError) {
        MySwal.fire({
            icon: "error",
            title: error?.message || "Error",
            text: error?.response?.data?.message || "Faild to load review details. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2"
        })
    }

    if(isLoading) {
        return <Loading />
    }

    return (
        <section className='mt-15'>
            <div className='flex justify-between items-start gap-5 mb-5'>
                <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Rating & Reviews</h2>
                <div className='flex justify-center items-center gap-2 bg-teal-500 rounded-full px-4 py-1 text-yellow-50'>
                    <FaStar className='' />
                    <span className='font-bold'>4.9</span>
                    <span className='hidden sm:block text-xs'>(<span>128</span> reviews)</span>
                </div>
            </div>

            <div className='space-y-5'>
                {
                    reviews.data.map((review, index) => (
                        <ReviewerCard key={index} review={review} />
                    ))
                }
            </div>
        </section>
    );
};

export default RatingAndReviews;