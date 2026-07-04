import React, { useRef } from 'react';
import { FiMapPin } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdatePropertyModal from '../update-property-modal/UpdatePropertyModal';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import MySwal from '../../lib/swal';

const MyProperty = ({ myProperty }) => {
    const queryClient = useQueryClient();
    const modalRef = useRef(null);
    const navigateTo = useNavigate();
    const {_id, images, propertyName, location, listingPurpose, price, addedByEmail } = myProperty || {};

    const deleteMutation = useMutation({
        mutationFn: async () => {
            const res = await axios.delete(`http://localhost:3000/api/v1/delete-my-property/${_id}`, {
                params: {
                    email: addedByEmail
                }
            });

            return res.data;
        },  
        
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['my-properties']});
            queryClient.invalidateQueries({queryKey: ['properties']});
            queryClient.invalidateQueries({ queryKey: ['featured-properties']});

            MySwal.fire({
                icon: "success",
                title: "Property Deleted!",
                text: "Your property has been deleted successfully.",
                confirmButtonText: "OK",
                confirmButtonColor: "#0694a2"
            })
        }
    })

    const handleDelete = async () => {
        if(document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        const result = await MySwal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            cancelButtonColor: "#0694a2",
            confirmButtonColor: "#ef4444",
        });

        if(result.isConfirmed) {
            deleteMutation.mutate(_id);
        }
    }

    return (
        <div className="card bg-teal-50 max-w-96 xl:w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg relative group">
            <figure className='h-48 overflow-hidden'>
                <img className='cover group-hover:scale-105 transition-transform duration-300'
                    src={images?.[0]}
                    alt="Shoes" />
            </figure>
            <div className="card-body px-2">
                <p className='absolute top-4 right-4 bg-teal-200 text-teal-800 font-semibold px-3 py-1 rounded-full'>{listingPurpose === 'sale' ? 'For Sale' : 'For Rent'}</p>
                <h2 className="card-title ">{propertyName}</h2>
                <p className='text-gray-500'><FiMapPin className='inline' /> {location?.city}, {location?.thana}</p>

                <div className='flex justify-between gap-4 items-center'>
                    <p className="text-xl">$ <span>{price?.toLocaleString()}</span></p>
                    <button 
                        className="bg-teal-50 font-fredoka text-xl cursor-pointer text-teal-600 transition duration-300 hover:underline hover:scale-105"
                        onClick={() => navigateTo(`/properties/${_id}`)}
                    >
                        View Details
                    </button>
                </div>
                <div className="card-actions justify-between gap-2 items-center mt-4">
                    <button onClick={handleDelete} className="btn text-red-600 font-fredoka text-base bg-teal-50 hover:bg-red-200 "><RiDeleteBin6Line /></button>
                    <button onClick={() => modalRef.current?.showModal()} className="btn flex-1 font-fredoka text-base bg-teal-500 text-white transition duration-300 hover:scale-x-95">Update</button>
                </div>

                {/* Update Modal */}
                <UpdatePropertyModal ref={modalRef} myProperty={myProperty} modalRef={modalRef} />
            </div>
        </div>
    );
};

export default MyProperty;