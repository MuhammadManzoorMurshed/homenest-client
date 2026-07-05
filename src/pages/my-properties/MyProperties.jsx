import React, { useEffect } from 'react';
import MyProperty from '../../components/my-property/MyProperty';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/loading/Loading';
import axios from 'axios';
import MySwal from '../../lib/swal';
import useAuth from '../../hooks/useContext';

const MyProperties = () => {
    const { user } = useAuth();
    const { data: myProperties, isLoading, error, isError, refetch } = useQuery({
        queryKey: ['my-properties'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/api/v1/get-my-properties?email=${user?.email}`);

            return res.data;
        }
    })

    useEffect(() => {
        isError && (
            MySwal.fire({
                icon: "error",
                title: error.message || "Error",
                text: "Failed to load properties. Please try again.",
                confirmButtonText: "OK",
                confirmButtonColor: "#0694a2",
            })
        )
    }, [error, isError]);

    return (
        <div className='max-w-7xl mx-auto my-15'>
            <Helmet>
                <title>HomeNest | My Properties</title>
            </Helmet>
            <div className='text-right'>
                <h1 className='font-fredoka font-semibold text-4xl text-teal-900 dark:text-teal-300 text-center'>My Properties</h1>
                <p className='font-medium text-md text-center mt-4 dark:text-gray-300'>Manage your active listings, monitor inquiries, and keep your property details<span className='hidden sm:inline'><br /></span>up to date for potential buyers and renters.</p>
            </div>

            {isLoading && <Loading />}

            <div className={`${isError ? 'flex flex-col justify-center items-center my-15' : 'grid grid-cols-1 sm:grid-cols-2 [@media(min-width:60rem)]:grid-cols-3 gap-5 mt-15 justify-items-center'}`}>
                <h2 className={`text-red-600 font-fredoka font-semibold text-3xl text-center mb-4 ${isError ? 'block' : 'hidden'}`}>Error Occurred</h2>
                <button onClick={() => refetch()} className={`bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 hover:scale-105 cursor-pointer ${isError ? 'block' : 'hidden'}`}>
                    Try Again to Load Properties
                </button>
                {
                    myProperties?.data?.map(property => (
                        <MyProperty key={property._id} myProperty={property} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyProperties;