import React from 'react';

const UpdatePropertyForm = () => {
    return (
        <>
            <form method="dialog">
                {/* if there is a button, it will close the modal */}

                {/* Property Name */}
                <label className='label font-fredoka font-semibold text-lg mb-2' htmlFor="property-name">Property Name</label>
                <input className='input w-full border-0' type="text" id="property-name" name="property-name" placeholder='@ e.g. Luxury Apartment in Dhanmondi' />

                {/* Description */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="description">Description</label>
                <textarea className='textarea textarea-xs w-full border-0 text-base placeholder:text-sm' name="description" id="description" cols="30" rows="5" placeholder='@ Type property description here'></textarea>

                <div className='sm:flex sm:justify-between sm:items-center gap-4 mt-3'>
                    {/* Property Type */}
                    <div className='flex-1 flex flex-col'>
                        <label className='label font-fredoka font-semibold text-lg mb-2' htmlFor="property-type">Property Type</label>
                        <select className='input w-full border-0' name="property-type" id="property-type">
                            <option value="">Select a property type</option>
                            <option value="commercialspace">Commercial Space</option>
                            <option value="apartment">Apartment</option>
                            <option value="warehouse">Warehouse</option>
                            <option value="house">House</option>
                            <option value="flat">Flat</option>
                            <option value="room">Room</option>
                            <option value="condo">Sublet</option>
                            <option value="condo">Office</option>
                            <option value="condo">Shop</option>
                            <option value="condo">Land</option>
                            <option value="condo">Hostel</option>
                            <option value="condo">Villa</option>
                        </select>
                    </div>

                    {/* Price/Rent */}
                    <div className='flex-1 flex flex-col'>
                        <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="price">Price/Rent</label>
                        <input className='input w-full border-0' type="number" id="price" name="price" placeholder='@ Type property price/rent here' />
                    </div>
                </div>

                {/* Location */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="location">Location</label>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="city">City</label>
                        <input className='input w-full border-0' type="text" id="city" name="city" placeholder='@ Type city here' />
                    </div>

                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="thana">Upazilla/Thana</label>
                        <input className='input w-full border-0' type="text" id="thana" name="thana" placeholder='@ Type upazilla/thana here' />
                    </div>

                    <div>
                        <label className='label font-medium text-normal mb-2' htmlFor="area">Area</label>
                        <input className='input w-full border-0' type="text" id="area" name="area" placeholder='@ Type area here' />
                    </div>
                </div>

                {/* Images */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="images">Images</label>
                <input className='input w-full border-0' type="text" name="images" id="images" placeholder='@ Enter image URLs separated by commas' />

                <div className='flex flex-col sm:flex-row sm: justify-evenly sm:items-center gap-4 bg-teal-50 p-5 rounded-md shadow-xs my-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-sm text-gray-500'>Owner Name</p>
                        <input className='focus:outline-0 font-bold text-base' type="text" name="" id="" value="Manzoor Murshed" readOnly/>
                        <p className='text-[12px] text-teal-700'>NON-EDITABLE</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-sm text-gray-500'>Owner Email</p>
                        <input className='focus:outline-0 font-bold text-base' type="email" name="" id="" value="manzoor.murshed@example.com" readOnly/>
                        <p className='text-[12px] text-teal-700'>NON-EDITABLE</p>
                    </div>
                </div>

                <div className='space-x-2 flex justify-end'>
                    <button className=" w-30 btn bg-teal-600 text-white transition duration-300 hover:bg-teal-700 hover:scale-y-105">Update</button>
                    <button className="w-30 btn bg-teal-300 transition duration-300 hover:bg-teal-400 hover:scale-y-105">Cancel</button>
                </div>
            </form>
        </>
    );
};

export default UpdatePropertyForm;