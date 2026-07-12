import React from 'react';
import PropertyCard from '../property-card/PropertyCard';
import { durations } from '../../animations/shared';
import { motion } from 'motion/react';

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    visible: {
        opacity: 1,
        y: 0,
        // transition: {
        //     duration: durations.normal,
        // }
    }
}

const AllPropertiesGrid = ({ allProperties }) => {
    const MotionContainer = motion.div;

    return (
        <MotionContainer
            variants={cardVariants}

            className='grid grid-cols-1 sm:grid-cols-2 [@media(min-width:60rem)]:grid-cols-3 gap-5 justify-items-center'
        >
            {
                allProperties?.data?.map(property => (
                    <PropertyCard key={property._id} property={property} orchestrated={true} />
                ))
            }
        </MotionContainer>
    );
};

export default AllPropertiesGrid;