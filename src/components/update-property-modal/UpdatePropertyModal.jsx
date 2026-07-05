import React, { forwardRef } from 'react';
import UpdatePropertyForm from '../update-property-form/UpdatePropertyForm';

const UpdatePropertyModal = forwardRef((props, ref) => {
    const { myProperty, modalRef } = props;

    return (
        <dialog ref={ref} className="modal">
            <div className="modal-box sm:p-8 max-h-11/12 max-w-175 bg-teal-100 dark:bg-gray-800">
                <div>
                    <h3 className='font-fredoka font-semibold text-4xl text-teal-900 dark:text-teal-300 text-center'>Update Property</h3>
                    <p className='font-medium text-md text-center mt-4 dark:text-gray-300'>Manage the listing details for your high-end estate.</p>
                </div>

                <div className="modal-actions flex-col justify-center mt-15">
                    <UpdatePropertyForm myProperty={myProperty} modalRef={modalRef} />
                </div>
            </div>
        </dialog>
    );
});

export default UpdatePropertyModal;