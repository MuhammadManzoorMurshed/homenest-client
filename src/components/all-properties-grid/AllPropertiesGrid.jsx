import React from 'react';
import PropertyCard from '../property-card/PropertyCard';

const AllPropertiesGrid = ({ allProperties }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 [@media(min-width:60rem)]:grid-cols-3 gap-5 justify-items-center'>
            {
                allProperties?.data?.map(property => (
                    <PropertyCard key={property._id} property={property} orchestrated={false} />
                ))
            }
        </div>
    );
};

export default AllPropertiesGrid;