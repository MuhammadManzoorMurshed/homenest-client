import React from 'react';
import RatingCard from '../../components/rating-card/RatingCard';
import Pagination from '../../components/pagination/Pagination';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useContext';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import MySwal from '../../lib/swal';

const MyRatings = () => {
    const { user } = useAuth();
    const { data: myRatings, isLoading, isError, error } = useQuery({
        queryKey: ['my-ratings', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/api/v1/get-my-ratings?email=${user?.email}`);

            return res.data;
        }
    });

    if(isError) {
        MySwal.fire({
            icon: "error", 
            title: error?.message || "Error",
            text: error?.response?.data?.message || "Faild to load reviews. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2"
        })
    }

    console.log("My Reviews: ", myRatings);

    return (
        <div className='max-w-7xl mx-auto my-15'>

            <Helmet>
                <title>HomeNest | My Ratings</title>
            </Helmet>

            <div className='sm:flex sm:justify-between sm:items-center gap-6 mb-10'>
                <div>
                    <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-left'>My Ratings</h1>
                    <p className='font-medium text-md text-left mt-4'>Here are the ratings you have given to various properties.</p>
                </div>
                <div className='flex gap-10 mt-10 sm:mt-0 bg-teal-100 px-15 py-5 rounded-md justify-evenly items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold text-2xl text-teal-600'>12</p>
                        <p className='text-sm text-gray-600'>Reviews</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold text-2xl text-teal-600'>4.8</p>
                        <p className='text-sm text-gray-600'>Average Rating</p>
                    </div>
                </div>
            </div>

            {
                isLoading && <Loading />
            }

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    myRatings?.data.map((myRating) => (
                        <RatingCard key={myRating._id} myRating={myRating} />
                    ))
                }
            </div>

            <Pagination borderRadius='!rounded-full' />
        </div>
    );
};

export default MyRatings;