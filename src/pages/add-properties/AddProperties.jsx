import React from 'react';
import MySwal from '../../lib/swal';
import { useNavigate } from 'react-router-dom';

const AddProperties = () => {
    const navigateTo = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const propertyName = form['property-name'].value;
        const description = form['description'].value;
        const propertyType = form['property-type'].value;
        const listingPurpose = form['listing-purpose'].value;
        const price = form['price'].value;
        const city = form['city'].value;
        const thana = form['thana'].value;
        const area = form['area'].value;
        const images = form['images'].value.split(',').map(url => url.trim());
        const name = form['name'].value;
        const email = form['email'].value;

        console.log(propertyName, description, propertyType, listingPurpose, price, city, thana, area, images, name, email);

        const propertyData = {
            propertyName,
            description,
            propertyType,
            listingPurpose,
            price,
            location: {
                city,
                thana,
                area
            },
            images,
            contact: {
                name,
                email
            }
        };

        fetch('http://localhost:3000/add-properties', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(propertyData),
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('Network response was not ok', res.statusText);
            }

            return res.json();
        })
        .then(data => {
            // console.log('Server response: ', data);

            if(data.success) {
                MySwal.fire({
                    icon: "success",
                    title: "Property Added",
                    text: data.message || "Your property has been added successfully!",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#38bdf8",
                })

                form.reset();
                navigateTo('/my-properties');
            } else {
                MySwal.fire({
                    icon: "error",
                    title: "Error",
                    text: data.message || "Failed to add property. Please try again.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#ef4444",
                })
            }
            
        })
        .catch(error => {
            // console.error('Error adding property: ', error);
            MySwal.fire({
                icon: "error",
                title: "Error",
                text: error.message || "An unexpected error occurred. Please try again.",
                confirmButtonText: "OK",
                confirmButtonColor: "#ef4444",
            })
        });
    }
    
    return (
        <div className='mx-auto rounded-lg bg-teal-100 my-15 px-4 py-15 sm:py-20 sm:px-10 sm:w-150 md:w-175'>
            <form  className='flex flex-col' action="" onSubmit={handleFormSubmit}>
                <div className='text-center mb-15'>
                    <h1 className='font-fredoka font-semibold text-4xl text-teal-900'>Add New Property</h1>
                    <p className='font-medium text-lg text-teal-500 mt-4'>Complete the form below to publish a new property listing.</p>
                </div>

                {/* Property Name */}
                <label className='label font-fredoka font-semibold text-lg mb-2' htmlFor="property-name">Property Name</label>
                <input className='input w-full border-0' type="text" id="property-name" name="property-name" placeholder='@ e.g. Luxury Apartment in Dhanmondi'/>

                {/* Description */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="description">Description</label>
                <textarea className='textarea textarea-xs w-full border-0 text-base placeholder:text-sm' name="description" id="description" cols="30" rows="10" placeholder='@ Type property description here'></textarea>

                {/* Property Type */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="property-type">Property Type</label>
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

                {/* Listing Purpose */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="listing-purpose">Listing Purpose</label>
                <select className='input w-full border-0' name="listing-purpose" id="listing-purpose">
                    <option value="">Select a purpose</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                </select>

                {/* Price/Rent */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="price">Price/Rent</label>
                <input className='input w-full border-0' type="number" id="price" name="price" placeholder='@ Type property price/rent here'/>

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
                <input className='input w-full border-0' type="text" name="images" id="images" placeholder='@ Enter image URLs separated by commas'/>

                {/* Name */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="name">Name</label>
                <input className='input w-full border-0' type="text" id="name" name="name" placeholder='@ Type your name here'/>

                {/* Email */}
                <label className='label font-fredoka font-semibold text-lg mt-3 mb-2' htmlFor="email">Email</label>
                <input className='input w-full border-0' type="email" id="email" name="email" placeholder='@ Type your email here'/>

                {/* Submit Button */}
                <button className='btn btn-neutral mt-6 font-fredoka font-semibold text-2xl py-6 bg-teal-500 border-0 transform transition-transform hover:scale-y-105 duration-300' type="submit">Add Property</button>
            </form>
        </div> 
    );
};

export default AddProperties;