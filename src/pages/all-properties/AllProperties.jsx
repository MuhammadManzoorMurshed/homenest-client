import React from 'react';
import PropertyCard from '../../components/property-card/PropertyCard';
import Pagination from '../../components/pagination/Pagination';
import Search from '../../components/search/Search';
import { useQuery } from '@tanstack/react-query';
import MySwal from '../../lib/swal';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import { Helmet } from 'react-helmet-async';

const AllProperties = () => {
    const { data: allProperties, isLoading, error, isError, refetch } = useQuery({
        queryKey: ['all-properties'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/api/v1/get-properties');

            return res.data;
        },
        staleTime: 5000, // 5 seconds
    })

    if(isError) {
        MySwal.fire({
            icon: "error",
            title: error.message || "Error",
            text: "Failed to load properties. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2",
        })
    }

    return (
        <div className='max-w-7xl mx-auto my-15'>

            <Helmet>
                <title>HomeNest | All Properties</title>
            </Helmet>

            <div className='text-right'>
                <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center'>All Properties</h1>
                <p className='font-medium text-md text-center mt-4'>Explore our curated selection of premium residences, from modern<span className='hidden sm:inline'><br /></span>urban lofts to sprawling suburban estates. Find the perfect place to call home.</p>
            </div>

            <Search />

            {
                isLoading && <Loading />
            }

            <div className={`${isError ? 'flex flex-col justify-center items-center mt-15 mb-15' : 'grid grid-cols-1 sm:grid-cols-2 [@media(min-width:60rem)]:grid-cols-3 gap-5 justify-items-center'}`}>
                <h2 className={`text-red-600 font-fredoka font-semibold text-3xl text-center mb-4 ${isError ? 'block' : 'hidden'}`}>Error Occurred</h2>
                <button onClick={() => refetch()} className={`bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 hover:scale-105 cursor-pointer ${isError ? 'block' : 'hidden'}`}>
                    Try Again to Load Properties
                </button>
                {
                    allProperties?.data?.map(property => (
                        <PropertyCard key={property._id} property={property}/>
                    ))
                }
            </div>

            <Pagination borderRadius='!rounded-xl' isHidden='flex' />
        </div>
    );
};

export default AllProperties;