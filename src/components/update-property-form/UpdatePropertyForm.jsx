import React, { useState } from 'react';
import useAuth from '../../hooks/useContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import MySwal from '../../lib/swal';

const UpdatePropertyForm = ({ myProperty, modalRef }) => {
    const { user } = useAuth();
    const { _id, propertyName, description, propertyType, price, location, images } = myProperty || {};
    const { city, thana, area } = location || {};
    const destructuredMyProperty = {
        propertyName,
        description,
        propertyType,
        price,
        city,
        thana,
        area,
        images,
    }
    myProperty = destructuredMyProperty;
    const [updatedMyProperty, setUpdatedMyProperty] = useState(null);
    const queryClient = useQueryClient();
    const patchMutation = useMutation({
        mutationFn: async ({ id, updatedMyProperty }) => {
            const res = await axios.patch(`http://localhost:3000/api/v1/update-my-property/${id}`, updatedMyProperty);

            return res.data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['my-properties'],
            });
            queryClient.invalidateQueries({
                queryKey: ['properties'],
            });
            queryClient.invalidateQueries({
                queryKey: ['featured-properties'],
            });

            MySwal.fire({
                icon: "success",
                title: "Property Updated",
                text: "Your property has been updated successfully!",
                confirmButtonText: "OK",
                confirmButtonColor: "#0694a2",
            })
        },

        onError: (error) => {
            MySwal.fire({
                icon: "error",
                title: error.message || "Error",
                text: "Failed to update property.",
                confirmButtonText: "OK",
                confirmButtonColor: "#0694a2",
            });
        }
    })

    const handleFormChange = (e) => {
        console.log("tagName:", e.target.tagName);
        console.log("name:", e.target.name);
        console.log("value:", e.target.value);
        console.log("type:", e.target.type);

        const form = e.target;
        // console.log("Form in handleFormChange: ", form);
        let changedField = form.name;
        let changedValue = form.value;

        console.log("Changed field: ", changedField);
        console.log("Changed value: ", changedValue);

        if (!changedField || !(changedField in myProperty)) {
            console.log("Changed field is not valid: ", changedField);
            return;
        }

        const isChangedProperty = myProperty[changedField].toString() !== changedValue ? true : false;

        if (isChangedProperty) {
            if (changedField === 'price') {
                changedValue = Number(changedValue);
            }

            if (changedField === "images") {
                const imagesArray = changedValue.split(',').map(image => image.trim());

                changedValue = imagesArray;
            }

            if(changedField === "city" || changedField === "thana" || changedField === "area") {
                changedField = `location.${changedField}`;
            }

            setUpdatedMyProperty(prev => ({
                ...prev,
                [changedField]: changedValue,
            }));
        }
    }

    const handleUpdate = () => {
        if (updatedMyProperty) {
            patchMutation.mutate({
                id: _id,
                updatedMyProperty
            }, {
                onSuccess: () => {
                    setUpdatedMyProperty(null);
                    modalRef.current?.close();
                },
                onError: () => {
                    setUpdatedMyProperty(null);
                    modalRef.current?.close();
                }
            });
            console.log("Update button clicked. Updated My Property: ", updatedMyProperty);
        }
    }

    console.log("Updated My Property: ", updatedMyProperty);

    return (
        <>
            <form method="dialog" onBlur={handleFormChange}>
                {/* if there is a button, it will close the modal */}

                {/* Property Name */}
                <label className='label font-fredoka font-semibold text-lg mb-2' htmlFor="property-name">Property Name</label>
                <input className='input w-full border-0' type="text" id="property-name" name="propertyName" defaultValue={propertyName} />

                {/* Description */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="description">Description</label>
                <textarea className='textarea textarea-xs w-full border-0 text-base placeholder:text-sm' name="description" id="description" cols="30" rows="5" defaultValue={description}></textarea>

                <div className='sm:flex sm:justify-between sm:items-center gap-4 mt-3'>
                    {/* Property Type */}
                    <div className='flex-1 flex flex-col'>
                        <label className='label font-fredoka font-semibold text-lg mb-2' htmlFor="property-type">Property Type</label>
                        <select className='input w-full border-0' name="propertyType" id="property-type" defaultValue={propertyType}>
                            <option value="">Select a property type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="flat">Flat</option>

                            {/* <option value="commercialspace">Commercial Space</option>
                            <option value="warehouse">Warehouse</option>
                            <option value="room">Room</option>
                            <option value="condo">Sublet</option>
                            <option value="condo">Office</option>
                            <option value="condo">Shop</option>
                            <option value="condo">Land</option>
                            <option value="condo">Hostel</option>
                            <option value="condo">Villa</option> */}
                        </select>
                    </div>

                    {/* Price/Rent */}
                    <div className='flex-1 flex flex-col'>
                        <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="price">Price/Rent</label>
                        <input className='input w-full border-0' type="number" id="price" name="price" placeholder='@ Type property price/rent here' defaultValue={price} />
                    </div>
                </div>

                {/* Location */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="location">Location</label>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="city">City</label>
                        <input className='input w-full border-0' type="text" id="city" name="city" defaultValue={city} />
                    </div>

                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="thana">Upazilla/Thana</label>
                        <input className='input w-full border-0' type="text" id="thana" name="thana" placeholder='@ Type upazilla/thana here' defaultValue={thana} />
                    </div>

                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="area">Area</label>
                        <input className='input w-full border-0' type="text" id="area" name="area" placeholder='@ Type area here' defaultValue={area} />
                    </div>
                </div>

                {/* Images */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="images">Images</label>
                <input className='input w-full border-0' type="text" name="images" id="images" placeholder='@ Enter image URLs separated by commas' defaultValue={images?.join(',')} />

                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-teal-50 p-5 rounded-md shadow-xs my-5'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p className='font-bold text-sm text-gray-500'>Owner Name</p>
                        <input className='focus:outline-0 font-bold text-base' type="text" name="ownerName" id="" value={user?.displayName} readOnly />
                        <p className='text-[12px] text-teal-700'>NON-EDITABLE</p>
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p className='font-bold text-sm text-gray-500'>Owner Email</p>
                        <input className='focus:outline-0 font-bold text-base' type="email" name="ownerEmail" id="" value={user?.email} readOnly />
                        <p className='text-[12px] text-teal-700'>NON-EDITABLE</p>
                    </div>
                </div>

                <div className='space-x-2 flex justify-end'>
                    <button onClick={handleUpdate} type="button" className=" w-30 btn bg-teal-600 text-white transition duration-300 hover:bg-teal-700 hover:scale-y-105">Update</button>
                    <button onClick={() => modalRef.current?.close()} type="button" className="w-30 btn bg-teal-300 transition duration-300 hover:bg-teal-400 hover:scale-y-105">Cancel</button>
                </div>
            </form>
        </>
    );
};

export default UpdatePropertyForm;