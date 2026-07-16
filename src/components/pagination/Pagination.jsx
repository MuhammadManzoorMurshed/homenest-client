import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'motion/react';
import { interactions } from '../../animations/interactions';
import { transitions } from '../../animations/shared';

const Pagination = ({ borderRadius, isHidden = 'hidden' }) => {
    const MotionButton = motion.button;

    return (
        <div className='flex justify-center items-center gap-4 mt-10'>
            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                className={`btn btn-outline dark:text-gray-200 transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`}><FaChevronLeft /></MotionButton>

            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                className={`btn btn-outline bg-teal-500 text-white transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`}>1</MotionButton>

            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                className={`btn btn-outline dark:text-gray-200 transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`}>2</MotionButton>

            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                className={`btn btn-outline dark:text-gray-200 transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`}>3</MotionButton>

            <p className={`${isHidden} dark:text-gray-300`}>...</p>
            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                className={`btn btn-outline dark:text-gray-200 transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} ${isHidden} size-8 p-3`}>10</MotionButton>

            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                transition={transitions.fast}
                className={`btn btn-outline dark:text-gray-200 transition-all duration-150 hover:bg-teal-400 hover:text-white border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`}><FaChevronRight /></MotionButton>
        </div>
    );
};

export default Pagination;