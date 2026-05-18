import React, { useState } from 'react';
import { RxEyeOpen } from 'react-icons/rx';
import { GoEyeClosed } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useContext';
import Loading from '../../components/loading/Loading';
import MySwal from '../../lib/swal';

const Signin = () => {
    const { signIn, signInWithGoogle, loading, setLoading } = useAuth();
    const location = useLocation();
    const navigateTo = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from || '/';

    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("Result: ", result);
                console.log("Logged in user: ", user);

                form.reset();

                MySwal.fire({
                    icon: "success",
                    title: "Welcome Back!",
                    text: "Logged in successfully!",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#16bdca",
                })

                // Redirect to the previous page or home page
                navigateTo(from, { replace: true });
            })
            .catch(error => {
                setLoading(false);

                console.log("Error code:", error.code);
                console.log("Error message:", error.message);

                if(error.code === 'auth/invalid-credential') {
                    MySwal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Invalid email or password.",
                    })
                }
            });
    }

    const handleForgotPassword = () => {

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log("Signed in: ", result.user);

                navigateTo(from, {replace: true});
            })
            .catch(error => {
                console.log("Google sign in error: ", error);
            })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='card my-15 bg-teal-100 sm:w-150 md:w-175 sm:mx-auto sm:px-6 py-10'>
            <h1 className='font-fredoka font-semibold text-4xl text-teal-900 text-center mb-10'>Login Now!</h1>
            <div className='card-body px-4'>
                <form onSubmit={handleLogin} className="w-full">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label font-fredoka font-semibold text-lg mt-2" htmlFor='email'>Email</label>
                        <input type="email" className="input w-full border-0" id='email' name='email' placeholder="@ Email here" />

                        {/* Password */}
                        <div className='mb-2'>
                            <label className="label font-fredoka font-semibold text-lg my-2" htmlFor='pass'>Password</label>

                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} className="input w-full border-0" id='pass' name='pass' placeholder="@ Password here" />
                                {
                                    showPassword ?
                                        <RxEyeOpen onClick={() => setShowPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                        :
                                        <GoEyeClosed onClick={() => setShowPassword(true)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer w-4 h-4" />
                                }
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div onClick={handleForgotPassword}><a className="link link-hover">Forgot password?</a></div>

                        {/* Register Button */}
                        <button className="btn btn-neutral mt-4 font-fredoka font-semibold text-2xl py-6 bg-teal-500 border-0 hover:scale-y-105 transition-transform duration-300">Login</button>
                    </fieldset>
                </form>

                <div className='text-center font-semibold text-base mt-6'>
                    <span>Don't have an account?</span>
                    <span> Click to <Link to={'/authentication/signup'} className='inline-block font-bold text-teal-500 transform hover:text-teal-700 transition-transform duration-300'>register</Link></span>
                </div>

                <button onClick={() => handleSignInWithGoogle()} className="btn py-6 mt-6 mx-auto bg-white text-black border-[#e5e5e5] transform hover:scale-x-95 transition-transform duration-300 w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Signin;