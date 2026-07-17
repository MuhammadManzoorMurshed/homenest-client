import React, { useState, useEffect } from 'react';
import PropertyCard from '../../components/property-card/PropertyCard';
import Pagination from '../../components/pagination/Pagination';
import Search from '../../components/search/Search';
import { useQuery } from '@tanstack/react-query';
import MySwal from '../../lib/swal';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { fadeUp } from '../../animations/fade';
import { transitions } from '../../animations/shared';
import AllPropertiesGrid from '../../components/all-properties-grid/AllPropertiesGrid';

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 0.35,
            ease: "easeOut",
        }
    },
}

const AllProperties = () => {
    const [searchText, setSearchText] = useState("");
    const [sortField, setSortField] = useState("newest");
    const [page, setPage] = useState(1);

    const MotionHeading = motion.h1;
    const MotionParagraph = motion.p;
    const MotionContainer = motion.div;

    const { data: allProperties, isLoading, isFetching, error, isError, refetch } = useQuery({
        queryKey: ['all-properties', searchText, sortField, page],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/api/v1/get-properties?search=${searchText}&sort=${sortField}&page=${page}&limit=12`);

            return res.data;
        },

        staleTime: 5000, // 5 seconds
    })

    useEffect(() => {
        if (allProperties?.data && (allProperties.data.length === 0)) {
            MySwal.fire({
                icon: "info",
                title: "No Properties Found!",
                text: "Try adjusting your search or filters.",
                confirmButtonText: "OK",
                confirmButtonColor: "#0694a2"
            })
        }
    }, [allProperties])

    if (isError) {
        MySwal.fire({
            icon: "error",
            title: error.message || "Error",
            text: "Failed to load properties. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2",
        })
    }

    const handleSearchChange = (value) => {
        setSearchText(value);
        setPage(1);
    }

    const handleSortChange = (value) => {
        setSortField(value);
        setPage(1);
    }

    // console.log(searchText);

    return (
        <div className='max-w-7xl mx-auto my-15'>

            <Helmet>
                <title>HomeNest | All Properties</title>
            </Helmet>

            <div className='text-right'>
                <MotionHeading
                    variants={fadeUp()}
                    initial="hidden"
                    animate="visible"
                    className='font-fredoka font-semibold text-4xl text-teal-900 dark:text-teal-300 text-center'
                >
                    All Properties
                </MotionHeading>
                <MotionParagraph
                    variants={fadeUp(transitions.slow)}
                    initial="hidden"
                    animate="visible"
                    className='font-medium text-md text-center mt-4 dark:text-gray-300'
                >
                    Explore our curated selection of premium residences, from modern<span className='hidden sm:inline'><br /></span>urban lofts to sprawling suburban estates. Find the perfect place to call home.
                </MotionParagraph>
            </div>

            <Search setSearchText={handleSearchChange} setSortField={handleSortChange} />

            {
                (isLoading || isFetching) ? (
                    <Loading />
                ) : (
                    <MotionContainer
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: "some",
                        }}
                        className={`${isError ? 'flex flex-col justify-center items-center mt-15 mb-15' : ""}`}>
                        
                        <div>
                            <h2 className={`text-red-600 font-fredoka font-semibold text-3xl text-center mb-4 ${isError ? 'block' : 'hidden'}`}>Error Occurred</h2>
                            <button onClick={() => refetch()} className={`bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 hover:scale-105 cursor-pointer ${isError ? 'block' : 'hidden'}`}>
                                Try Again to Load Properties
                            </button>
                        </div>

                        <AllPropertiesGrid allProperties={allProperties} />
                    </MotionContainer>
                )
            }

            <Pagination
            currentPage={page}
            totalPages={allProperties?.totalPages}
            onPageChange={setPage}
            borderRadius='!rounded-xl'
            // isHidden='flex'
            />
        </div>
    );
};

export default AllProperties;