import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'motion/react';
import { interactions } from '../../animations/interactions';
// import { transitions } from '../../animations/shared';

const Pagination = ({ borderRadius, currentPage, totalPages, onPageChange }) => {
    const MotionButton = motion.button;

    if (!totalPages || totalPages <= 1) {
        return null;
    }

    const getPageNumbers = () => {
        const pages = [];
        const delta = 1;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                pages.push(i);
            } else if (pages[pages.length - 1] !== '...') {
                pages.push('...');
            }
        }

        return pages;
    };

    const baseBtn = `btn btn-outline transition-all duration-150 border-gray-300 dark:border-gray-600 ${borderRadius} size-8 p-3`;

    return (
        <div className='flex justify-center items-center gap-4 mt-10'>
            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`dark:text-gray-200 hover:bg-teal-400 hover:text-white disabled:opacity-40 disabled:pointer-events-none`}>
                <FaChevronLeft />
            </MotionButton>

            {
                getPageNumbers().map((page, index) => (
                    page === '...' ? (
                        <p key={`dots-${index}`} className='dark:text-gray-300'>...</p>
                    ) : (
                        <MotionButton
                            whileHover={interactions.buttonHover}
                            whileTap={interactions.buttonTap}
                            // transition={transitions.fast}
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`${baseBtn} ${page === currentPage
                                ? 'bg-teal-500 text-white'
                                : 'dark:text-gray-200 hover:bg-teal-400 hover:scale-105 hover:text-white'}`}>
                            {page}
                        </MotionButton>
                    )
                ))
            }

            <MotionButton
                whileHover={interactions.buttonHover}
                whileTap={interactions.buttonTap}
                // transition={transitions.fast}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`${baseBtn} dark:text-gray-200 hover:bg-teal-400 hover:scale-105 hover:text-white disabled:opacity-40 disabled:pointer-events-none`}>
                <FaChevronRight />
            </MotionButton>
        </div>
    );
};

export default Pagination;