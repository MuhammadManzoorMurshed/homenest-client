import React from 'react';
import { CircleCheckBig, RulerDimensionLine } from 'lucide-react';
import PropertyDetailsRight from '../../components/property-details-right/PropertyDetailsRight';
import { MdVerified } from "react-icons/md";
import RatingAndReviews from '../../components/rating-and-reviews/RatingAndReviews';
import ShareExperience from '../../components/share-experience/ShareExperience';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MySwal from '../../lib/swal';
import Loading from '../../components/loading/Loading';
import { useQuery } from '@tanstack/react-query';

const PropertyDetails = () => {
    const { id } = useParams();
    const { data: propertyData, isLoading, error, isError } = useQuery({
        queryKey: ['property-details', id],
        queryFn: async () => {
            return await axios.get(`http://localhost:3000/api/v1/get-property-details/${id}`).then(res => res.data);
        }
    })

    const { listingPurpose, images, description, contact, propertyName, location, price, createdAt } = propertyData?.data || {};

    const rightSideInfo = {
        propertyName,
        location,
        price,
        createdAt
    }

    console.log("Property details: ", propertyData);

    if (isError) {
        MySwal.fire({
            icon: "error",
            title: error.message || "Error",
            text: "Failed to load property details. Please try again.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0694a2",
        })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <div className='max-w-7xl mx-auto my-15 md:flex md:justify-between md:items-start gap-10'>
                {/* Left Side */}
                <div className='flex-2'>
                    <div className='rounded-xl overflow-hidden relative'>
                        <img className='w-full h-auto' src={images?.[0] || "/1.png"} alt="" />
                        <div className='flex gap-3 absolute top-4 left-4'>
                            <p className='bg-teal-700 font-bold text-white text-xs px-3 py-1 rounded-full'>{listingPurpose == 'rent' ? 'For Rent' : 'For Sale'}</p>
                            <p className='bg-teal-300 font-bold text-teal-900 text-xs px-3 py-1 rounded-full'>Featured</p>
                        </div>
                    </div>

                    <div className='mt-15'>
                        <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Property Description</h2>
                        <div className='mt-5 text-gray-600 text-base text-justify flex flex-col gap-4'>
                            <p>{description}</p>
                            <p>The gourmet chef's kitchen features state-of-the-art appliances and a generous marble island, flowing seamlessly into the open-concept living area. Outside, the infinity-edge pool creates a seamless visual transition to the ocean, complemented by an expansive hardwood deck perfect for entertaining.</p>
                        </div>
                    </div>

                    <div className='mt-15 p-6 sm:p-10 bg-teal-100 rounded-xl'>
                        <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Key Features</h2>
                        <ul className='text-sm text-gray-600 mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3'>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Smart Home System</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Wine Cellar</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> 3-Car Garage</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Home Theater</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Guest House</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Solar Panels</li>
                            <li><CircleCheckBig className='inline w-4 h-4 text-teal-700 mr-1' /> Private beach access</li>
                        </ul>
                    </div>

                    <div className='mt-15 p-6 sm:p-10 bg-white rounded-xl'>
                        <h2 className='text-teal-900 font-fredoka font-normal text-2xl'>Posted By</h2>
                        <div className='mt-5 [@media(min-width:25rem)]:flex [@media(min-width:25rem)]:justify-start [@media(min-width:25rem)]:items-center [@media(min-width:25rem)]:gap-6'>

                            <img className='size-20 object-cover rounded-full mb-3 sm:mb-0' src="/3.png" alt="" />

                            <div>
                                <h3 className='font-semibold text-xl'>{contact?.name || "Unknown"}</h3>
                                <p className='text-gray-600 text-sm my-1'>{contact?.email || "Email not available"}</p>
                                <h4 className='text-teal-700 font-bold text-sm'><MdVerified className='inline w-4 h-4 mr-1' /> Verified Premier Partner</h4>
                            </div>
                        </div>
                    </div>

                    <RatingAndReviews />

                    <ShareExperience />
                </div>

                {/* Right Side */}
                <PropertyDetailsRight property={rightSideInfo} />
            </div>
        </>
    );
};

export default PropertyDetails;