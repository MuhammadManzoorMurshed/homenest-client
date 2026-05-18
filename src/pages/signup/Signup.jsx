import React, { useState } from 'react';
import { RxEyeOpen } from 'react-icons/rx';
import { GoEyeClosed } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useContext';
import { checkName } from '../../utils/checkName';
import { checkPhotoUrl } from '../../utils/checkPhotoUrl';
import { checkEmail } from '../../utils/checkEmail';
import { checkPassword } from '../../utils/checkPassword';
import { checkConfirmPassword } from '../../utils/checkConfirmPassword';
import Loading from './../../components/loading/Loading'

const Signup = () => {
    const { signUp, loading } = useAuth();
    const location = useLocation();
    const navigateTo = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwords, setPasswords] = useState({ password: "" , confirmPassword: "" });
    const [errors, setErrors] = useState({ firstName: "", lastName: "", photoUrl: "", email: "", password: "", confirmPassword: "", check: "" });

    const from = location.state?.from || '/';

    // ------------ Hnadle Register Function ------------
    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const firstName = form.fname.value;
        const lastName = form.lname.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.pass.value;
        const confirmPassword = form.conpass.value;
        const isCheckedTC = form.check.checked;

        console.log(firstName, lastName, photoURL, email, password, confirmPassword, isCheckedTC);

        if(!firstName) {
            setErrors(prevErrors => ({...prevErrors, firstName: "First name cannnot be empty"}));

            return;
        } else {
            setErrors(prevErrors => ({...prevErrors, firstName: ""}));
        }

        signUp(email, password)
        .then( result => {
            const user = result.user;
            console.log("User created succesfully: ", user);

            form.reset();
            navigateTo(from, { replace: true });
        })
        .catch( error => {
            console.error("Error creating user: ", error);
        });
    }

    // --------------- Set Error Function ---------------
    const setError = (errorFor, error) => {
        setErrors(prevErrors => ({ ...prevErrors, [errorFor]: error }));
    }

    // ----------- Hnadle First Name Function -----------
    const handleFirstName = (event) => {
        const error = checkName(event.target.value);
        setError("firstName", error);
    }

    // ------------ Hnadle Last Name Function ------------
    const handleLastName = (event) => {
        const error = checkName(event.target.value);
        setError("lastName", error);
    }

    // -------- Hnadle Profile Photo URL Function --------
    const handleProfilePhotoUrl = (event) => {
        const error = checkPhotoUrl(event.target.value);
        setError("photoUrl", error);
    }

    // -------------- Hnadle Email Function --------------
    const handleEmail = (event) => {
        const error = checkEmail(event.target.value);
        setError("email", error);
    }

    // ------------ Hnadle Password Function ------------
    const handlePassword = (event) => {
        const newPassword = event.target.value;
        const error = checkPassword(newPassword);
        setError("password", error);
        setPasswords(prevPasswords => ({ ...prevPasswords, password: newPassword }));
    }

    // -------- Hnadle Confirm Password Function --------
    const handleConfirmPassword = (event) => {
        const newConfirmPassword = event.target.value;
        const error = checkConfirmPassword(passwords.password, newConfirmPassword);
        setError("confirmPassword", error);
        setPasswords(prevPasswords => ({ ...prevPasswords, confirmPassword: newConfirmPassword }));
        setError("confirmPassword", error);
    }

    if(loading) {
        return <Loading />
    }

    return (
        <div className='card my-15 bg-teal-100 sm:w-150 md:w-175 sm:mx-auto sm:px-6 py-10'>
            <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center mb-10'>Register Now!</h1>
            <div className='card-body px-4'>
                <form onSubmit={handleRegister} className="w-full">
                    <fieldset className="fieldset">
                        {/* First Name */}
                        <label className="label font-fredoka font-semibold text-lg" htmlFor="fname">First Name</label>
                        <input onBlur={handleFirstName} type="text" className="input w-full border-0" id='fname' name='fname' placeholder="@ First name here" />

                        {
                            errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>
                        }

                        {/* Last Name */}
                        <label className="label font-fredoka font-semibold text-lg mt-2" htmlFor='lname'>Last Name</label>
                        <input onBlur={handleLastName} type="text" className="input w-full border-0" id='lname' name='lname' placeholder="@ Last name here" />

                        {
                            errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>
                        }

                        {/* Profile Photo */}
                        <label className="label font-fredoka font-semibold text-lg mt-2" htmlFor='photo'>Profile Photo</label>
                        <input onBlur={handleProfilePhotoUrl} type="text" className="input w-full border-0" id='photo' name='photo' placeholder="@ Profile photo URL here" />

                        {
                            errors.photoUrl && <p className='text-red-500 text-sm'>{errors.photoUrl}</p>
                        }

                        {/* Email */}
                        <label className="label font-fredoka font-semibold text-lg mt-2" htmlFor='email'>Email</label>
                        <input onBlur={handleEmail} type="email" className="input w-full border-0" id='email' name='email' placeholder="@ Email here" />

                        {
                            errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>
                        }

                        {/* Password */}
                        <div className=''>
                            <label className="label font-fredoka font-semibold text-lg my-2" htmlFor='pass'>Password</label>

                            <div className='relative'>
                                <input onBlur={handlePassword} type={showPassword ? "password" : "text"} className="input w-full border-0" id='pass' name='pass' placeholder="@ Password here" />

                                {
                                    showPassword ?
                                        <RxEyeOpen onClick={() => setShowPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                        :
                                        <GoEyeClosed onClick={() => setShowPassword(true)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                }
                            </div>
                            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                        </div>

                        {/*Confirm Password */}
                        <div>
                            <label className="label font-fredoka font-semibold text-lg my-2" htmlFor='conpass'>Confirm Password</label>

                            <div className='relative'>
                                <input onBlur={handleConfirmPassword} type={showConfirmPassword ? "text" : "password"} className="input w-full border-0" id='conpass' name='conpass' placeholder="@ Password here" />

                                {
                                    showConfirmPassword ?
                                        <RxEyeOpen onClick={() => setShowConfirmPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                        :
                                        <GoEyeClosed onClick={() => setShowConfirmPassword(true)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                }
                            </div>
                            {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
                        </div>

                        {/* Terms & Condition */}
                        <div>
                            <label className="label mt-4" htmlFor='check'>
                                <input type="checkbox" className="checkbox" id='check' name='check' />
                                Accept our terms & conditions
                            </label>
                            {errors.check && <p className='text-red-500 text-sm'>{errors.check}</p>}
                        </div>

                        {/* Register Button */}
                        <button className="btn btn-neutral mt-4 font-fredoka font-semibold text-2xl py-6 bg-teal-500 border-0 transform hover:scale-y-105 transition-transform duration-300">Register</button>
                    </fieldset>
                </form>
                <div className='text-center font-semibold text-base mt-6'>
                    <span>Already Registered?</span>
                    <span> Click to <Link to={'/authentication/signin'} className='font-bold text-teal-500 transform hover:text-teal-700 transition-transform duration-300'>login</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Signup;