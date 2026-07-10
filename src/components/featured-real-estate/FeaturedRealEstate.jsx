import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PropertyCard from '../../components/property-card/PropertyCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MySwal from '../../lib/swal';
import Loading1 from '../../components/loading/Loading1';
import Loading from '../loading/Loading';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp } from '../../animations/fade'
import { transitions } from '../../animations/shared';

const FeaturedRealEstate = () => {
    const navigateTo = useNavigate();
    const MotionHeading = motion.h1;
    const MotionParagraph = motion.p;

    const { data: featuredProperties, isLoading, error, isError, refetch } = useQuery({
        queryKey: ['featured-properties'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/api/v1/get-featured-properties');

            return res.data;
        },
        staleTime: 5000, // 5 seconds
    });

    console.log("Featured Properties: ", featuredProperties);
    console.log("Loading: ", isLoading);
    console.log("Error: ", error);
    console.log("Is Error: ", isError);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        MySwal.fire({
            icon: "error",
            title: error.message || "Error",
            text: "Failed to load featured properties. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2",
        })
        // .then(() => {
        //     refetch();
        // });
    }

    return (
        <section className='max-w-7xl mx-auto my-15 sm:my-25'>
            <div className='[@media(min-width:32rem)]:flex [@media(min-width:32rem)]:justify-between [@media(min-width:32rem)]:items-end'>
                <div className='text-right'>
                    <MotionHeading
                    variants={fadeUp()}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                    className='font-fredoka font-semibold text-[28px] [@media(min-width:32rem)]:text-3xl text-teal-900 dark:text-teal-300 text-left'>Featured Real Estate</MotionHeading>
                    <MotionParagraph
                    variants={fadeUp(transitions.slow)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true,
                        amount: 1
                    }}
                    className='font-medium text-[12px] [@media(min-width:32rem)]:text-base text-left mt-4 dark:text-gray-300'>Handpicked premium listings just for you</MotionParagraph>
                </div>

                <div className='flex justify-end mt-5 [@media(min-width:32rem)]:mt-0'>
                    <button onClick={() => navigateTo('/all-properties')} className='text-teal-600 dark:text-teal-400 flex items-center font-bold cursor-pointer transition duration-300 hover:text-teal-500 dark:hover:text-teal-300 hover:scale-105'>View All &nbsp; <FaArrowRight className='inline' /> </button>
                </div>
            </div>

            <div className={`${isError ? 'flex flex-col justify-center items-center my-15' : 'grid grid-cols-1 sm:grid-cols-2 [@media(min-width:60rem)]:grid-cols-3 gap-15 justify-items-center mt-15 '}`}>
                <h2 className={`text-red-600 font-fredoka font-semibold text-3xl text-center mb-4 ${isError ? 'block' : 'hidden'}`}>Error Occurred</h2>
                <button onClick={() => refetch()} className={`bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 hover:scale-105 cursor-pointer ${isError ? 'block' : 'hidden'}`}>
                    Try Again to Load Properties
                </button>
                {
                    
                    featuredProperties?.data?.map(property => (
                        <PropertyCard key={property._id} property={property} />
                    ))
                }
            </div>

        </section>
    );
};

export default FeaturedRealEstate;